"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, AlertCircle } from "lucide-react";

/**
 * PRODUCTION-READY AUDIO SYSTEM
 * - No external dependencies
 * - Local file reference
 * - Smooth volume transitions
 * - User preference persistence
 * - Performance optimized
 */

const AUDIO_PATH = "/audio/ambient.mp3";
const TRACK_NAME = "ambient_focus.wav";
const STORAGE_KEY = "portfolio_audio_enabled";
const TARGET_VOLUME = 0.35; // 35% volume is ideal for ambient
const FADE_DURATION = 1000; // 1 second as requested

export default function AudioStation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioning = useRef(false);

  // Initialize audio object lazily
  const getAudio = useCallback(() => {
    if (typeof window === "undefined") return null;

    if (!audioRef.current) {
      try {
        const audio = new Audio(AUDIO_PATH);
        audio.loop = true;
        audio.volume = 0;

        // Proper error handling for load failures
        audio.addEventListener("error", () => {
          const error = audio.error;
          let message = "Unknown audio error";

          if (error) {
            switch (error.code) {
              case 1:
                message = "Media loading aborted";
                break;
              case 2:
                message = "Network error while loading audio";
                break;
              case 3:
                message = "Audio decoding failed (unsupported format)";
                break;
              case 4:
                message = "Audio source not found (404)";
                break;
            }
          }

          console.error(`Audio Load Error: ${message}`, { code: error?.code });
          setHasError(true);
          setIsPlaying(false);
        });

        audioRef.current = audio;
      } catch (err) {
        console.error("Failed to initialize Audio API:", err);
        setHasError(true);
      }
    }
    return audioRef.current;
  }, []);

  const smoothFade = useCallback(
    (target: number, onComplete?: () => void) => {
      const audio = getAudio();
      if (!audio) return;

      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      isTransitioning.current = true;

      const step = 0.02;
      const interval =
        FADE_DURATION / (Math.abs(audio.volume - target) / step || 1);

      fadeIntervalRef.current = setInterval(() => {
        if (!audio) return;

        const diff = target - audio.volume;
        if (Math.abs(diff) <= step) {
          audio.volume = target;
          clearInterval(fadeIntervalRef.current!);
          isTransitioning.current = false;
          if (onComplete) onComplete();
        } else {
          audio.volume += diff > 0 ? step : -step;
        }
      }, interval);
    },
    [getAudio],
  );

  const togglePlayback = useCallback(async () => {
    if (hasError) return;

    const audio = getAudio();
    if (!audio) return;

    if (!isPlayingRef.current) {
      try {
        await audio.play();
        smoothFade(TARGET_VOLUME);
        setIsPlaying(true);
        isPlayingRef.current = true;
        localStorage.setItem(STORAGE_KEY, "true");
      } catch (err) {
        console.error("Playback failed:", err);
        // This often happens if user hasn't interacted yet
      }
    } else {
      smoothFade(0, () => {
        audio.pause();
        setIsPlaying(false);
        isPlayingRef.current = false;
        localStorage.setItem(STORAGE_KEY, "false");
      });
    }
  }, [hasError, getAudio, smoothFade]);

  // Use a ref for isPlaying to avoid dependency issues in useEffect
  const isPlayingRef = useRef(false);

  // Restore preference on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    const handleFirstInteraction = () => {
      if (saved === "true" && !isPlayingRef.current) {
        togglePlayback();
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    if (saved === "true") {
      window.addEventListener("click", handleFirstInteraction);
      window.addEventListener("keydown", handleFirstInteraction);
    }

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, [togglePlayback]);

  // Sync tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        audio.pause();
      } else if (isPlayingRef.current) {
        audio.play().catch(() => {
          // Silently handle resume failures
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-100 flex items-center gap-4 pointer-events-auto">
      <button
        onClick={togglePlayback}
        disabled={hasError}
        className={`group relative flex items-center justify-center w-10 h-10 border border-border bg-background/90 backdrop-blur-md hover:border-accent transition-all rounded-full active:scale-95 shadow-lg ${hasError ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      >
        <div className="absolute top-0 left-0 w-1 h-1 bg-accent opacity-0 group-hover:opacity-40" />
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-accent opacity-0 group-hover:opacity-40" />

        {hasError ? (
          <AlertCircle className="w-4 h-4 text-amber-500/60" />
        ) : isPlaying ? (
          <Volume2 className="w-4 h-4 text-accent" />
        ) : (
          <VolumeX className="w-4 h-4 text-slate-400 opacity-50" />
        )}

        {isPlaying && !hasError && (
          <div className="absolute -top-1 -right-1 flex gap-0.5 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  height: [2, 5, 2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 0.8 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-0.5 bg-accent"
              />
            ))}
          </div>
        )}
      </button>

      <AnimatePresence>
        {isPlaying && !hasError && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col font-mono select-none"
          >
            <div className="flex items-center gap-2 text-[9px] text-slate-500 uppercase tracking-[0.2em] font-black">
              <span className="text-accent opacity-60">♪</span>
              <span className="opacity-40">service:</span>
              <span className="text-slate-400">{TRACK_NAME}</span>
            </div>
          </motion.div>
        )}

        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[8px] text-amber-500/40 uppercase tracking-widest"
          >
            audio_source_unavailable
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

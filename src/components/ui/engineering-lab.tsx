"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon } from "lucide-react";

type LogEntry = {
  type: "cmd" | "out" | "err" | "anim";
  text: string;
};

const COMMANDS: Record<string, string | (() => string)> = {
  help: "Available commands: help, whoami, stack, deploy --prod, system.status, sudo hire, clear",
  whoami:
    "User: engineering_recruiter\nRole: Strategic Partner\nStatus: Authorized",
  stack:
    "Runtime: Node.js v20.x\nFrontend: Next.js 14 (App Router)\nStyle: Tailwind Engine v4\nAnimation: Framer Motion Refined",
  "system.status":
    "Kernel: 6.5.0-generic\nUptime: 42d 12h\nLoad: 0.12, 0.08, 0.05\nMemory: 2.4GB / 16GB\nStorage: 74% [████████░░░░]",
  "sudo hire": "ACCESS GRANTED. Redirecting to contact.endpoint...",
  clear: "",
};

export default function EngineeringLab() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<LogEntry[]>([
    { type: "out", text: "Engineering Lab v1.0.4 initialized." },
    { type: "out", text: "Type 'help' for available procedures." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const runDeployment = () => {
    const frames = [
      "[░░░░░░░░░░] 0%",
      "[██░░░░░░░░] 20%",
      "[████░░░░░░] 40%",
      "[██████░░░░] 60%",
      "[████████░░] 80%",
      "[██████████] 100%",
    ];

    setHistory((prev) => [
      ...prev,
      { type: "out", text: "Initializing production deployment..." },
    ]);

    frames.forEach((frame, i) => {
      setTimeout(() => {
        setHistory((prev) => {
          const newHistory = [...prev];
          if (i > 0) newHistory.pop(); // Remove previous progress frame
          return [
            ...newHistory,
            { type: "anim", text: `Build progress: ${frame}` },
          ];
        });
        if (i === frames.length - 1) {
          setTimeout(() => {
            setHistory((prev) => [
              ...prev,
              {
                type: "out",
                text: "✓ Deployment successful: live at production_target",
              },
            ]);
          }, 400);
        }
      }, i * 400);
    });
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, { type: "cmd", text: cmd }]);
    setInput("");

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "deploy --prod") {
      runDeployment();
      return;
    }

    if (cmd === "sudo hire") {
      setHistory((prev) => [
        ...prev,
        { type: "out", text: COMMANDS["sudo hire"] as string },
      ]);
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection)
          contactSection.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }, 1500);
      return;
    }

    const output = COMMANDS[cmd];
    if (output) {
      setHistory((prev) => [
        ...prev,
        { type: "out", text: typeof output === "function" ? output() : output },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "err", text: `Command not found: ${cmd}` },
      ]);
    }
  };

  return (
    <>
      {/* Trigger Label */}
      <div className="fixed bottom-8 right-8 z-90">
        <button
          onClick={() => setIsOpen(true)}
          className="font-mono text-[10px] text-[#e57474] opacity-50 hover:opacity-100 transition-opacity tracking-widest uppercase flex items-center gap-2 group"
        >
          <span className="group-hover:translate-x-[-2px] transition-transform">
            [
          </span>
          open_lab.sh
          <span className="group-hover:translate-x-[2px] transition-transform">
            ]
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className="fixed bottom-24 right-8 w-[340px] md:w-[450px] z-100 font-mono"
          >
            {/* Terminal Panel */}
            <div className="relative border border-[#232a2d] bg-[#141b1e]/95 rounded-sm shadow-2xl overflow-hidden">
              {/* Pixel Corners */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-[#e57474]" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-[#e57474]" />
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#e57474]" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#e57474]" />

              {/* Header */}
              <div className="bg-[#232a2d]/50 border-b border-[#232a2d] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-3 h-3 text-[#e57474]" />
                  <span className="text-[10px] text-[#b3b9b8] uppercase tracking-widest">
                    engineering_lab_subsystem
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#b3b9b8] hover:text-[#e57474] transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Content */}
              <div
                ref={scrollRef}
                className="h-64 overflow-y-auto p-4 space-y-2 scrollbar-hide text-xs"
              >
                {history.map((entry, i) => (
                  <div key={i} className="whitespace-pre-wrap leading-relaxed">
                    {entry.type === "cmd" && (
                      <div className="flex gap-2">
                        <span className="text-[#e57474]">$</span>
                        <span className="text-[#dadada]">{entry.text}</span>
                      </div>
                    )}
                    {entry.type === "out" && (
                      <div className="text-[#b3b9b8] opacity-80">
                        {entry.text}
                      </div>
                    )}
                    {entry.type === "err" && (
                      <div className="text-[#e57474]/70 italic">
                        {entry.text}
                      </div>
                    )}
                    {entry.type === "anim" && (
                      <div className="text-[#8ccf7e] opacity-80">
                        {entry.text}
                      </div>
                    )}
                  </div>
                ))}

                <form
                  onSubmit={handleCommand}
                  className="flex gap-2 items-center"
                >
                  <span className="text-[#e57474]">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[#dadada] caret-[#e57474]"
                  />
                </form>
              </div>

              {/* Status Bar */}
              <div className="bg-[#232a2d]/30 px-4 py-1.5 flex items-center justify-between text-[8px] text-[#b3b9b8]/40 uppercase tracking-tighter">
                <div className="flex gap-4">
                  <span>ln 1, col 12</span>
                  <span>utf-8</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#8ccf7e] rounded-full animate-pulse" />
                  <span>system_ready</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

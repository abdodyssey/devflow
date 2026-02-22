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
    { type: "out", text: "Research Console v2.4.0 initialized." },
    { type: "out", text: "Ready for architectural assessment." },
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
      "[░░░░░░░░░░]",
      "[██░░░░░░░░]",
      "[████░░░░░░]",
      "[██████░░░░]",
      "[████████░░]",
      "[██████████]",
    ];

    setHistory((prev) => [
      ...prev,
      { type: "out", text: "Synchronizing production environment..." },
    ]);

    frames.forEach((frame, i) => {
      setTimeout(() => {
        setHistory((prev) => {
          const newHistory = [...prev];
          if (i > 0) newHistory.pop(); // Remove previous progress frame
          return [
            ...newHistory,
            { type: "anim", text: `Build_State: ${frame} ${i * 20}%` },
          ];
        });
        if (i === frames.length - 1) {
          setTimeout(() => {
            setHistory((prev) => [
              ...prev,
              {
                type: "out",
                text: "Success: Deployment verified across all nodes.",
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
        { type: "out", text: "Redirecting to primary contact portal..." },
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
        { type: "err", text: `Unknown operation: ${cmd}` },
      ]);
    }
  };

  return (
    <>
      {/* Trigger Label */}
      <div className="fixed bottom-8 right-8 z-90">
        <button
          onClick={() => setIsOpen(true)}
          className="font-mono text-[10px] text-accent font-black hover:opacity-100 transition-opacity tracking-widest uppercase flex items-center gap-3 group px-5 py-2.5 rounded-full border border-border bg-background/80 backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Access_Console
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className="fixed bottom-24 right-8 w-[340px] md:w-[500px] z-100 font-mono"
          >
            {/* Console Panel */}
            <div className="relative border border-border bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-muted px-6 py-4 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-3">
                  <TerminalIcon className="w-4 h-4 text-accent" />
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">
                    Research_Execution_Env
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md hover:bg-muted-foreground/10 transition-colors"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Content */}
              <div
                ref={scrollRef}
                className="h-80 overflow-y-auto p-6 space-y-3 scrollbar-hide text-xs"
              >
                {history.map((entry, i) => (
                  <div key={i} className="whitespace-pre-wrap leading-relaxed">
                    {entry.type === "cmd" && (
                      <div className="flex gap-3">
                        <span className="text-accent font-black">❯</span>
                        <span className="text-foreground font-bold italic">
                          {entry.text}
                        </span>
                      </div>
                    )}
                    {entry.type === "out" && (
                      <div className="text-slate-500 font-medium pl-6">
                        {entry.text}
                      </div>
                    )}
                    {entry.type === "err" && (
                      <div className="text-rose-500 italic pl-6">
                        Error: {entry.text}
                      </div>
                    )}
                    {entry.type === "anim" && (
                      <div className="text-accent font-bold pl-6">
                        {entry.text}
                      </div>
                    )}
                  </div>
                ))}

                <form
                  onSubmit={handleCommand}
                  className="flex gap-3 items-center pl-6"
                >
                  <span className="text-accent font-black">❯</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-foreground caret-accent font-bold"
                  />
                </form>
              </div>

              {/* Status Bar */}
              <div className="bg-muted/50 px-6 py-3 flex items-center justify-between text-[8px] text-slate-400 uppercase tracking-widest font-black border-t border-border">
                <div className="flex gap-6">
                  <span>Latency: 12ms</span>
                  <span>Region: ID-JKT-1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                  <span>Cloud_Encrypted</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  "Reading your CV",
  "Checking structure & formatting",
  "Evaluating ATS readability",
  "Analysing keywords",
  "Reviewing achievement impact",
  "Preparing recommendations",
];

export default function AnalysingPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((current) => {
        if (current < steps.length - 1) {
          return current + 1;
        }

        clearInterval(timer);

        setTimeout(() => {
          setProgress(100);

          setTimeout(() => {
            router.push("/analysis");
          }, 800);
        }, 500);

        return current;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [router]);

  useEffect(() => {
    setProgress(
      Math.min(95, Math.round(((activeStep + 1) / steps.length) * 100))
    );
  }, [activeStep]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07090D] px-6 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative w-full max-w-xl">
        {/* Header */}
        <div className="text-center">
          <div className="relative mx-auto mb-9 flex h-28 w-28 items-center justify-center">
            <div className="absolute inset-0 animate-ping rounded-full border border-cyan-400/10" />

            <div className="absolute inset-3 rounded-full border border-cyan-400/20" />

            <div className="absolute inset-6 rounded-full border border-cyan-400/40" />

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              C
            </div>
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-400">
            CareerLens AI
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Analysing your CV
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            We&apos;re checking the signals that can affect CV readability and
            job alignment.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-10 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-1.5 rounded-full bg-cyan-400 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between text-xs">
          <span className="text-zinc-600">Analysis in progress</span>

          <span className="text-zinc-400">{progress}%</span>
        </div>

        {/* Analysis steps */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#0D1117]/90 p-5">
          {steps.map((step, index) => {
            const completed = index < activeStep;
            const active = index === activeStep;

            return (
              <div
                key={step}
                className={`flex items-center gap-4 py-3 ${
                  index !== steps.length - 1
                    ? "border-b border-white/[0.05]"
                    : ""
                }`}
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs ${
                    completed
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                      : active
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 text-zinc-700"
                  }`}
                >
                  {completed ? (
                    "✓"
                  ) : active ? (
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                  ) : (
                    index + 1
                  )}
                </div>

                <span
                  className={`text-sm ${
                    completed
                      ? "text-zinc-500"
                      : active
                      ? "text-white"
                      : "text-zinc-700"
                  }`}
                >
                  {step}
                </span>

                {active && (
                  <span className="ml-auto text-xs text-cyan-400">
                    Checking...
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          🔒 Your CV remains private during analysis
        </p>
      </div>
    </main>
  );
}

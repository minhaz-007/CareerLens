"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

type FindingProps = {
  severity: "critical" | "improve" | "passed";
  title: string;
  description: string;
  children?: ReactNode;
  premium?: boolean;
};

type AnalysisData = {
  success: boolean;
  fileName: string;
  characters: number;
  words: number;
  targetRole: string;

  analysis: {
    cvHealth: {
      score: number;

      scores: {
        structure: number;
        readability: number;
        impact: number;
      };

      stats: {
        critical: number;
        improvements: number;
        passed: number;
      };

      checks: {
        name: string;
        passed: boolean;
        message: string;
        category: "structure" | "contact" | "impact" | "readability";
      }[];
    };

    roleReadiness: {
      targetRole: string;
      score: number | null;
      status: "not-analysed" | "analysed" | "unsupported";
      profileId: string | null;
      family: string | null;
      confidence: "high" | "medium" | "low" | "none";

      evidence: {
        name: string;
        weight: number;
        matched: boolean;
        matchedKeywords: string[];
      }[];
    };
  };
};

export default function AnalysisPage() {
  const [tab, setTab] = useState<"issues" | "passed">("issues");
  const [result, setResult] = useState<AnalysisData | null>(null);

  useEffect(() => {
    const savedResult = sessionStorage.getItem("careerLensCV");

    if (!savedResult) return;

    try {
      const parsedResult = JSON.parse(savedResult) as AnalysisData;
      setResult(parsedResult);
    } catch {
      console.error("Could not load CareerLens analysis.");
    }
  }, []);

  const analysis = result?.analysis;
  const cvHealth = analysis?.cvHealth;
  const roleReadiness = analysis?.roleReadiness;

  const overallScore = cvHealth?.score ?? 0;

  const structureScore = cvHealth?.scores.structure ?? 0;
  const readabilityScore = cvHealth?.scores.readability ?? 0;
  const impactScore = cvHealth?.scores.impact ?? 0;

  const criticalCount = cvHealth?.stats.critical ?? 0;
  const improvementCount = cvHealth?.stats.improvements ?? 0;
  const passedCount = cvHealth?.stats.passed ?? 0;

  const scoreDegrees = Math.round((overallScore / 100) * 360);
  const failedChecks = cvHealth?.checks.filter((check) => !check.passed) ?? [];

  const passedChecks = cvHealth?.checks.filter((check) => check.passed) ?? [];

  return (
    <main className="min-h-screen bg-[#07090D] text-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07090D]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 font-bold text-black">
              C
            </div>
            <span className="text-lg font-semibold">CareerLens</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <Link href="/check" className="text-white">
              CV Checker
            </Link>
            <span>Job Match</span>
            <span>LinkedIn</span>
            <span>Pricing</span>
          </div>

          <button className="text-sm text-zinc-400 hover:text-white">
            Sign in
          </button>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* TOP */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
              <Link href="/check" className="hover:text-white">
                CV Checker
              </Link>
              <span>/</span>
              <span>Analysis</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight">
              Your CV analysis
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              {result?.fileName ?? "CV"} · Target role:{" "}
              {result?.targetRole || "Not specified"}
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/check"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.07]"
            >
              Analyse another CV
            </Link>

            <button className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300">
              Fix my CV ✦
            </button>
          </div>
        </div>

        {/* SCORE HERO */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0D1117]">
          <div className="grid lg:grid-cols-[340px_1fr]">
            {/* Overall score */}
            <div className="flex flex-col items-center justify-center border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm text-zinc-500">CV Health</p>

              <div
                className="relative mt-6 flex h-48 w-48 items-center justify-center rounded-full p-[10px]"
                style={{
                  background: `conic-gradient(#22d3ee 0deg, #22d3ee ${scoreDegrees}deg, #27272a ${scoreDegrees}deg, #27272a 360deg)`,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#0D1117]">
                  <span className="text-6xl font-semibold tracking-tight">
                    {overallScore}
                  </span>
                  <span className="mt-1 text-sm text-zinc-600">out of 100</span>
                </div>
              </div>

              <span className="mt-5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                GOOD START
              </span>

              <p className="mt-4 max-w-[250px] text-center text-xs leading-5 text-zinc-600">
                Your CV has a solid foundation. The checks below highlight
                opportunities to strengthen its structure, readability and
                impact.
              </p>
            </div>

            {/* Metrics */}
            <div className="p-7 sm:p-9">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium">Score breakdown</p>
                  <p className="mt-1 text-xs text-zinc-600">
                    Based on document structure, readability and evidence
                    signals.
                  </p>
                </div>

                <span className="hidden rounded-lg bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300 sm:block">
                  {criticalCount + improvementCount} improvements found
                </span>
              </div>

              <div className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2">
                <ScoreBar
                  label="Readability"
                  score={readabilityScore}
                  description="Contact, length & basic readability"
                />
                <ScoreBar
                  label="Structure"
                  score={structureScore}
                  description="Sections & hierarchy"
                />

                <ScoreBar
                  label="Impact"
                  score={impactScore}
                  description="Achievements & evidence"
                />
              </div>

              <div className="mt-9 grid grid-cols-3 gap-3">
                <MiniStat
                  number={String(criticalCount)}
                  label="Critical issues"
                  tone="critical"
                />
                <MiniStat
                  number={String(improvementCount)}
                  label="Improvements"
                  tone="warning"
                />
                <MiniStat
                  number={String(passedCount)}
                  label="Checks passed"
                  tone="good"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LAYER 2 — ROLE READINESS */}
        <section className="mt-5 rounded-2xl border border-white/10 bg-[#0D1117] p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  LAYER 2
                </span>

                <span className="text-xs text-zinc-600">
                  Role-specific analysis
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold">Role Readiness</h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                How much relevant evidence CareerLens can detect for your target
                career family.
              </p>
            </div>

            {roleReadiness?.status === "analysed" &&
              roleReadiness.score !== null && (
                <div className="sm:text-right">
                  <div className="text-4xl font-semibold tracking-tight text-white">
                    {roleReadiness.score}
                    <span className="text-lg text-zinc-600">/100</span>
                  </div>

                  <p className="mt-1 text-xs text-zinc-500">
                    Evidence detected
                  </p>
                </div>
              )}
          </div>

          {roleReadiness?.status === "analysed" ? (
            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300">
                  Target:{" "}
                  <span className="font-medium text-white">
                    {roleReadiness.targetRole}
                  </span>
                </span>

                {roleReadiness.family && (
                  <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-400">
                    Family:{" "}
                    <span className="text-zinc-200">
                      {roleReadiness.family}
                    </span>
                  </span>
                )}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {roleReadiness.evidence.map((item) => (
                  <div
                    key={item.name}
                    className={`rounded-xl border p-4 ${
                      item.matched
                        ? "border-emerald-400/10 bg-emerald-400/[0.03]"
                        : "border-white/10 bg-black/20"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                          item.matched
                            ? "bg-emerald-400/10 text-emerald-300"
                            : "bg-white/[0.04] text-zinc-600"
                        }`}
                      >
                        {item.matched ? "✓" : "○"}
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`text-sm font-medium ${
                            item.matched ? "text-zinc-200" : "text-zinc-400"
                          }`}
                        >
                          {item.name}
                        </p>

                        {item.matched ? (
                          <p className="mt-1 text-xs leading-5 text-zinc-500">
                            Evidence found:{" "}
                            {item.matchedKeywords.slice(0, 4).join(", ")}
                          </p>
                        ) : (
                          <p className="mt-1 text-xs leading-5 text-zinc-600">
                            No clear evidence detected in this CV.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-zinc-600">
                Role Readiness measures evidence detected in your CV against a
                general career profile. It does not mean every employer requires
                every item listed. Specific vacancies can have different
                requirements.
              </p>
            </div>
          ) : roleReadiness?.status === "unsupported" ? (
            <div className="mt-6 rounded-xl border border-amber-400/10 bg-amber-400/[0.03] p-5">
              <p className="text-sm font-medium text-amber-200">
                Detailed role profile not available yet
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                CareerLens does not yet have a detailed profile for{" "}
                <span className="text-zinc-300">
                  {roleReadiness.targetRole}
                </span>
                . We will not generate a misleading Role Readiness score. You
                will still receive your CV Health analysis.
              </p>
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm font-medium text-zinc-300">
                No target role selected
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Add a target role when checking your CV to receive a
                role-specific readiness analysis.
              </p>
            </div>
          )}
        </section>

        {/* MAIN CONTENT */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Findings */}
          <div>
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setTab("issues")}
                className={`border-b-2 px-4 pb-4 text-sm transition ${
                  tab === "issues"
                    ? "border-cyan-400 text-white"
                    : "border-transparent text-zinc-500 hover:text-white"
                }`}
              >
                Issues & improvements
                <span className="ml-2 rounded-full bg-white/[0.06] px-2 py-0.5 text-xs">
                  {failedChecks.length}
                </span>
              </button>

              <button
                onClick={() => setTab("passed")}
                className={`border-b-2 px-4 pb-4 text-sm transition ${
                  tab === "passed"
                    ? "border-cyan-400 text-white"
                    : "border-transparent text-zinc-500 hover:text-white"
                }`}
              >
                Passed checks
                <span className="ml-2 rounded-full bg-white/[0.06] px-2 py-0.5 text-xs">
                  {passedChecks.length}
                </span>
              </button>
            </div>

            {tab === "issues" ? (
              <div className="mt-5 space-y-4">
                {failedChecks.length > 0 ? (
                  failedChecks.map((check) => {
                    const isCritical = [
                      "Experience section",
                      "Education section",
                      "Email address",
                    ].includes(check.name);

                    return (
                      <Finding
                        key={check.name}
                        severity={isCritical ? "critical" : "improve"}
                        title={check.name}
                        description={check.message}
                      />
                    );
                  })
                ) : (
                  <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                        ✓
                      </div>

                      <div>
                        <h3 className="font-medium">
                          No major issues detected
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                          CareerLens did not detect any failed checks in this
                          analysis. You can still improve the CV further by
                          matching it against a specific job description.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                {passedChecks.length > 0 ? (
                  passedChecks.map((check) => (
                    <Passed key={check.name} text={check.message} />
                  ))
                ) : (
                  <div className="rounded-xl border border-white/10 bg-[#0D1117] p-5 text-sm text-zinc-500">
                    No passed checks are available yet.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-5">
            {/* Word Booster */}
            <div className="rounded-2xl border border-white/10 bg-[#0D1117] p-5">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  ✦
                </div>

                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold text-zinc-500">
                  ONE-TIME
                </span>
              </div>

              <h3 className="mt-5 font-semibold">Recruiter Word Booster</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Strengthen weak wording and turn passive descriptions into
                clearer, recruiter-friendly statements.
              </p>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-xs text-zinc-600">One CV</p>
                  <p className="mt-1 text-2xl font-semibold">£0.99</p>
                </div>

                <button className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/15">
                  Boost wording
                </button>
              </div>
            </div>

            {/* Full fix */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.05] p-5">
              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

              <span className="relative rounded-full bg-cyan-400 px-2.5 py-1 text-[10px] font-bold text-black">
                BEST FOR THIS CV
              </span>

              <h3 className="relative mt-5 text-lg font-semibold">Fix My CV</h3>

              <p className="relative mt-2 text-sm leading-6 text-zinc-400">
                Improve wording, bullet structure, clarity and target-role
                alignment across this CV.
              </p>

              <ul className="relative mt-5 space-y-2.5 text-sm text-zinc-400">
                <li>✓ Rewrite weak bullet points</li>
                <li>✓ Improve professional summary</li>
                <li>✓ Strengthen recruiter-facing language</li>
                <li>✓ Highlight missing keyword opportunities</li>
              </ul>

              <button className="relative mt-6 w-full rounded-xl bg-cyan-400 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
                Fix my CV — £2.99
              </button>

              <p className="relative mt-3 text-center text-[11px] text-zinc-600">
                One-time payment · No subscription
              </p>
            </div>

            {/* Weekly */}
            <div className="rounded-2xl border border-white/10 bg-[#0D1117] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                Applying to multiple jobs?
              </p>

              <h3 className="mt-3 font-semibold">CareerLens Pro Week</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Get full access to CV fixing, job matching, LinkedIn
                optimisation, cover letters and interview prep.
              </p>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <span className="text-2xl font-semibold">£4.99</span>
                  <span className="text-xs text-zinc-600"> / 7 days</span>
                </div>

                <button className="text-sm font-medium text-cyan-300 hover:text-cyan-200">
                  View Pro →
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-[11px] leading-5 text-zinc-600">
                CV Health is an automated estimate based on document structure,
                readability and evidence signals detected in your CV. It does
                not represent a score from any specific employer or applicant
                tracking system and does not guarantee interviews or employment
                outcomes.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function ScoreBar({
  label,
  score,
  description,
}: {
  label: string;
  score: number;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="mt-1 text-xs text-zinc-600">{description}</p>
        </div>

        <span className="text-lg font-semibold">{score}</span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full bg-cyan-400"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

function MiniStat({
  number,
  label,
  tone,
}: {
  number: string;
  label: string;
  tone: "critical" | "warning" | "good";
}) {
  const styles = {
    critical: "text-red-300 bg-red-400/[0.05] border-red-400/10",
    warning: "text-amber-300 bg-amber-400/[0.05] border-amber-400/10",
    good: "text-emerald-300 bg-emerald-400/[0.05] border-emerald-400/10",
  };

  return (
    <div className={`rounded-xl border p-4 ${styles[tone]}`}>
      <p className="text-xl font-semibold">{number}</p>
      <p className="mt-1 text-xs opacity-60">{label}</p>
    </div>
  );
}

function Finding({
  severity,
  title,
  description,
  children,
  premium = false,
}: FindingProps) {
  const critical = severity === "critical";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0D1117] p-5 sm:p-6">
      <div className="flex gap-4">
        <div
          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
            critical ? "bg-red-400" : "bg-amber-400"
          }`}
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{title}</h3>

                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    critical
                      ? "bg-red-400/10 text-red-300"
                      : "bg-amber-400/10 text-amber-300"
                  }`}
                >
                  {critical ? "CRITICAL" : "IMPROVE"}
                </span>
              </div>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500">
                {description}
              </p>
            </div>

            {premium && (
              <button className="shrink-0 rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-400/10">
                Fix with AI ✦
              </button>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

function Comparison({ before, after }: { before: string; after: string }) {
  return (
    <div className="mt-5 grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-red-400/10 bg-red-400/[0.03] p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-red-300/60">
          Current
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-500">{before}</p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-cyan-400/15 bg-cyan-400/[0.03] p-4">
        <div className="absolute inset-0 flex items-center justify-center bg-[#0D1117]/75 backdrop-blur-[3px]">
          <button className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-black">
            Unlock improved version ✦
          </button>
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300/60">
          Improved
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-500">{after}</p>
      </div>
    </div>
  );
}

function Keyword({ text }: { text: string }) {
  return (
    <span className="rounded-lg border border-amber-400/15 bg-amber-400/[0.05] px-3 py-1.5 text-xs text-amber-200/70">
      + {text}
    </span>
  );
}

function Passed({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] p-4">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10 text-xs text-emerald-300">
        ✓
      </div>

      <p className="text-sm text-zinc-400">{text}</p>
    </div>
  );
}

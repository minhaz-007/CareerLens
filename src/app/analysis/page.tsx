"use client";

import Link from "next/link";
import { useState } from "react";

type FindingProps = {
  severity: "critical" | "improve" | "passed";
  title: string;
  description: string;
  children?: React.ReactNode;
  premium?: boolean;
};

export default function AnalysisPage() {
  const [tab, setTab] = useState<"issues" | "passed">("issues");

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
              SWE_CV.pdf · Target role: Data Analyst
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
              <p className="text-sm text-zinc-500">ATS Readiness</p>

              <div className="relative mt-6 flex h-48 w-48 items-center justify-center rounded-full bg-[conic-gradient(#22d3ee_0deg,#22d3ee_259deg,#27272a_259deg,#27272a_360deg)] p-[10px]">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#0D1117]">
                  <span className="text-6xl font-semibold tracking-tight">
                    72
                  </span>
                  <span className="mt-1 text-sm text-zinc-600">out of 100</span>
                </div>
              </div>

              <span className="mt-5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                GOOD START
              </span>

              <p className="mt-4 max-w-[250px] text-center text-xs leading-5 text-zinc-600">
                Your CV has a solid foundation, but several improvements could
                strengthen readability and role alignment.
              </p>
            </div>

            {/* Metrics */}
            <div className="p-7 sm:p-9">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium">Score breakdown</p>
                  <p className="mt-1 text-xs text-zinc-600">
                    Based on common ATS and recruiter-facing CV considerations.
                  </p>
                </div>

                <span className="hidden rounded-lg bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300 sm:block">
                  9 improvements found
                </span>
              </div>

              <div className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-2">
                <ScoreBar
                  label="Formatting"
                  score={91}
                  description="Layout & parsing"
                />
                <ScoreBar
                  label="Structure"
                  score={84}
                  description="Sections & hierarchy"
                />
                <ScoreBar
                  label="Keywords"
                  score={61}
                  description="Role relevance"
                />
                <ScoreBar
                  label="Impact"
                  score={66}
                  description="Achievements & evidence"
                />
              </div>

              <div className="mt-9 grid grid-cols-3 gap-3">
                <MiniStat
                  number="2"
                  label="Critical issues"
                  tone="critical"
                />
                <MiniStat number="7" label="Improvements" tone="warning" />
                <MiniStat number="18" label="Checks passed" tone="good" />
              </div>
            </div>
          </div>
        </section>

        {/* POTENTIAL SCORE */}
        <section className="mt-5 flex flex-col justify-between gap-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-semibold text-cyan-300">
              +14
            </div>

            <div>
              <p className="font-medium">
                Your CV has room to become significantly stronger
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Addressing the highlighted issues could improve clarity,
                relevance and recruiter readability.
              </p>
            </div>
          </div>

          <button className="shrink-0 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
            Fix all with AI — £2.99
          </button>
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
                  9
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
                  18
                </span>
              </button>
            </div>

            {tab === "issues" ? (
              <div className="mt-5 space-y-4">
                <Finding
                  severity="critical"
                  title="Your experience lacks measurable achievements"
                  description="Several bullet points describe responsibilities but don't show scope, results or measurable impact."
                  premium
                >
                  <Comparison
                    before="Responsible for analysing sales data and preparing weekly reports."
                    after="Analysed weekly sales performance across [X] accounts, identifying trends that helped the team improve [relevant outcome]."
                  />
                </Finding>

                <Finding
                  severity="critical"
                  title="Important target-role keywords are missing"
                  description="Your CV shows transferable experience, but several Data Analyst terms are either missing or weakly represented."
                  premium
                >
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Keyword text="SQL" />
                    <Keyword text="Power BI" />
                    <Keyword text="Data visualisation" />
                    <Keyword text="Dashboards" />
                    <Keyword text="Data cleaning" />
                  </div>

                  <p className="mt-4 text-xs leading-5 text-amber-200/60">
                    Only add skills you genuinely possess. CareerLens should
                    never invent experience for you.
                  </p>
                </Finding>

                <Finding
                  severity="improve"
                  title="Your professional summary is too generic"
                  description="Your opening summary could communicate your target role, strongest skills and value more quickly."
                  premium
                />

                <Finding
                  severity="improve"
                  title="Some bullet points start with weak language"
                  description='Phrases such as "responsible for" and "helped with" can often be replaced with clearer action-led wording.'
                  premium
                />

                <Finding
                  severity="improve"
                  title="Skills could be grouped more clearly"
                  description="Separating technical tools, analytical skills and business skills may improve scanning and readability."
                />
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                <Passed text="Contact information is easy to identify" />
                <Passed text="Standard section headings are used" />
                <Passed text="No excessive use of tables detected" />
                <Passed text="Education section is clearly structured" />
                <Passed text="Employment dates are consistently formatted" />
                <Passed text="CV length is within a reasonable range" />
                <Passed text="File format is suitable for common ATS parsing" />
                <Passed text="No distracting graphics detected" />
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

              <h3 className="relative mt-5 text-lg font-semibold">
                Fix My CV
              </h3>

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
                ATS Readiness is an estimate based on common CV structure,
                readability, keyword alignment and parsing considerations.
                Results do not guarantee ATS ranking, interviews or employment
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

function Comparison({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
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
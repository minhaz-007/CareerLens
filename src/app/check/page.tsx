"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckCVPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [targetRole, setTargetRole] = useState("");

  function chooseFile(selectedFile?: File) {
    if (!selectedFile) return;

    const extension = selectedFile.name.split(".").pop()?.toLowerCase();

    if (extension !== "pdf" && extension !== "docx") {
      alert("Please upload a PDF or DOCX file.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("Please upload a file smaller than 10MB.");
      return;
    }

    setFile(selectedFile);
  }

  return (
    <main className="min-h-screen bg-[#07090D] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 border-b border-white/10 bg-[#07090D]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 font-bold text-black">
              C
            </div>

            <span className="text-lg font-semibold tracking-tight">
              CareerLens
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <span className="text-white">CV Checker</span>
            <Link href="/#job-match" className="transition hover:text-white">
              Job Match
            </Link>
            <Link href="/#linkedin" className="transition hover:text-white">
              LinkedIn
            </Link>
            <Link href="/#pricing" className="transition hover:text-white">
              Pricing
            </Link>
          </div>

          <button className="text-sm text-zinc-400 transition hover:text-white">
            Sign in
          </button>
        </div>
      </nav>

      <section className="relative z-10 px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3.5 py-1.5 text-xs font-medium text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Free ATS readiness check
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              How strong is your CV?
            </h1>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
              Upload your CV and CareerLens will analyse its structure,
              readability, keywords and common ATS parsing considerations.
            </p>
          </div>

          {/* Main card */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-[#0D1117]/90 p-5 shadow-2xl shadow-black/30 sm:p-8">
            {!file ? (
              <div
                onDragEnter={(event) => {
                  event.preventDefault();
                  setDragging(true);
                }}
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={(event) => {
                  event.preventDefault();
                  setDragging(false);
                }}
                onDrop={(event) => {
                  event.preventDefault();
                  setDragging(false);
                  chooseFile(event.dataTransfer.files?.[0]);
                }}
                onClick={() => inputRef.current?.click()}
                className={`group cursor-pointer rounded-2xl border border-dashed p-10 text-center transition duration-300 sm:p-14 ${
                  dragging
                    ? "border-cyan-400 bg-cyan-400/[0.08]"
                    : "border-white/15 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-cyan-400/[0.025]"
                }`}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept=".pdf,.docx"
                  className="hidden"
                  onChange={(event) => chooseFile(event.target.files?.[0])}
                />

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.07]">
                  <UploadIcon />
                </div>

                <h2 className="mt-6 text-lg font-semibold">
                  Drop your CV here
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  or click to browse your files
                </p>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <FileBadge text="PDF" />
                  <FileBadge text="DOCX" />
                  <span className="ml-1 text-xs text-zinc-600">Max 10MB</span>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <DocumentIcon />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{file.name}</p>

                    <p className="mt-1 text-xs text-zinc-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB · Ready to
                      analyse
                    </p>
                  </div>

                  <button
                    onClick={() => setFile(null)}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}

            {/* Target role */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="target-role"
                  className="text-sm font-medium text-zinc-300"
                >
                  Target role
                </label>

                <span className="text-xs text-zinc-600">Optional</span>
              </div>

              <input
                id="target-role"
                value={targetRole}
                onChange={(event) => setTargetRole(event.target.value)}
                placeholder="e.g. Product Manager, Data Analyst, Graduate Accountant"
                className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/5"
              />

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Adding a target role will help us make your recommendations more
                relevant.
              </p>
            </div>

            {/* CTA */}
            <button
              disabled={!file}
              onClick={() => router.push("/analysing")}
              className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-semibold transition ${
                file
                  ? "bg-cyan-400 text-black hover:-translate-y-0.5 hover:bg-cyan-300"
                  : "cursor-not-allowed bg-white/5 text-zinc-600"
              }`}
            >
              Analyse my CV
              <ArrowIcon />
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-600">
              <LockIcon />
              Your CV is not shared with employers
            </div>
          </div>

          {/* What we check */}
          <div className="mt-10">
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              What we check
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <CheckItem title="Formatting" text="Layout & parsing" />
              <CheckItem title="Structure" text="CV sections" />
              <CheckItem title="Keywords" text="Role relevance" />
              <CheckItem title="Impact" text="Achievements" />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
            <p className="text-xs leading-5 text-zinc-600">
              CareerLens provides an estimated ATS Readiness Score based on
              common CV structure, readability, keyword alignment and parsing
              considerations. It cannot guarantee an employer&apos;s ATS
              ranking, interview or hiring outcome.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function FileBadge({ text }: { text: string }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-semibold text-zinc-400">
      {text}
    </span>
  );
}

function CheckItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
      <div className="mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
        <CheckIcon />
      </div>

      <p className="text-sm font-medium">{title}</p>
      <p className="mt-1 text-xs text-zinc-600">{text}</p>
    </div>
  );
}

function UploadIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="text-cyan-300"
    >
      <path d="M12 16V4" />
      <path d="m7 9 5-5 5 5" />
      <path d="M5 15v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
import Link from "next/link";





export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090D] text-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07090D]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 font-bold text-black">
              C
            </div>

            <span className="text-lg font-semibold tracking-tight">
              CareerLens
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#checker">
              CV Checker
            </a>
            <a className="transition hover:text-white" href="#job-match">
              Job Match
            </a>
            <a className="transition hover:text-white" href="#linkedin">
              LinkedIn
            </a>
            <a className="transition hover:text-white" href="#pricing">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden text-sm text-zinc-300 sm:block">
              Sign in
            </button>

            <Link
              href="/check"
              className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Check my CV
            </Link>
                        
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left side */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              AI-powered career optimisation
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Beat the bots.
              <br />
              <span className="text-zinc-500">Impress the humans.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              Analyse your CV for ATS readiness, discover missing keywords and
              get actionable recommendations that help you build stronger job
              applications.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/check"
              className="rounded-xl bg-cyan-400 px-6 py-3.5 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Check my CV — Free
            </Link>
              
              <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:bg-white/10">
                See example analysis
              </button>
            </div>

            <p className="mt-4 text-sm text-zinc-600">
              PDF & DOCX • No credit card required
            </p>
          </div>

          {/* ATS Preview */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-cyan-500/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0D1117] p-6 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-zinc-500">CV Analysis</p>
                  <p className="mt-1 font-medium">Product_Manager_CV.pdf</p>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Analysis complete
                </span>
              </div>

              <div className="grid gap-6 py-7 sm:grid-cols-[160px_1fr]">
                {/* Score */}
                <div className="flex items-center justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-zinc-800">
                    <div className="text-center">
                      <div className="text-4xl font-semibold">82</div>
                      <div className="text-xs text-zinc-500">out of 100</div>
                    </div>

                    <div className="absolute -bottom-2 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                      STRONG
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  <Metric label="Formatting" score={94} />
                  <Metric label="Structure" score={86} />
                  <Metric label="Keywords" score={71} />
                  <Metric label="Impact" score={78} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Stat number="2" label="Critical" />
                <Stat number="7" label="Improvements" />
                <Stat number="18" label="Passed" />
              </div>

              <div className="mt-5 rounded-2xl border border-amber-400/10 bg-amber-400/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />

                  <div>
                    <p className="text-sm font-medium">
                      Missing measurable achievements
                    </p>
                    <p className="mt-1 text-sm leading-6 text-zinc-500">
                      6 experience bullets describe responsibilities without
                      demonstrating measurable outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section
        id="checker"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              One career toolkit
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to submit a stronger application.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Feature
              number="01"
              title="ATS Checker"
              text="Find formatting, structure and readability issues before you apply."
            />

            <Feature
              number="02"
              title="Job Match"
              text="Compare your CV with a vacancy and uncover missing skills and keywords."
            />

            <Feature
              number="03"
              title="Fix My CV"
              text="Improve weak bullet points and recruiter-facing language with AI."
              premium
            />

            <Feature
              number="04"
              title="LinkedIn Optimiser"
              text="Strengthen your headline, About section, experience and keywords."
              premium
            />
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Simple pricing
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Pay only when you need more.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Start with a free CV analysis. Purchase individual AI improvements
            or unlock the complete CareerLens toolkit.
          </p>

          <div className="mt-12 grid gap-5 text-left md:grid-cols-3">
            <PriceCard
              title="Free"
              price="£0"
              description="Understand what's holding your CV back."
              button="Check my CV"
            />

            <PriceCard
              title="Quick Fix"
              price="From £0.99"
              description="Purchase individual AI-powered career improvements."
              button="Explore fixes"
            />

            <PriceCard
              title="Pro Week"
              price="£4.99"
              description="Full access to CareerLens tools for your active job search."
              button="Get Pro Week"
              featured
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
          <p>© 2026 CareerLens</p>
          <p>Built to help candidates apply with confidence.</p>
        </div>
      </footer>
    </main>
  );
}

function Metric({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-zinc-400">{label}</span>
        <span>{score}</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-cyan-400"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
      <div className="text-lg font-semibold">{number}</div>
      <div className="text-xs text-zinc-500">{label}</div>
    </div>
  );
}

function Feature({
  number,
  title,
  text,
  premium = false,
}: {
  number: string;
  title: string;
  text: string;
  premium?: boolean;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0D1117] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-600">{number}</span>

        {premium && (
          <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-cyan-300">
            PRO
          </span>
        )}
      </div>

      <h3 className="mt-8 text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p>
    </div>
  );
}

function PriceCard({
  title,
  price,
  description,
  button,
  featured = false,
}: {
  title: string;
  price: string;
  description: string;
  button: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        featured
          ? "border-cyan-400/40 bg-cyan-400/[0.06]"
          : "border-white/10 bg-[#0D1117]"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{title}</h3>

        {featured && (
          <span className="rounded-full bg-cyan-400 px-2.5 py-1 text-[10px] font-bold text-black">
            POPULAR
          </span>
        )}
      </div>

      <div className="mt-6 text-3xl font-semibold">{price}</div>

      <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-500">
        {description}
      </p>

      <button
        className={`mt-7 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
          featured
            ? "bg-cyan-400 text-black hover:bg-cyan-300"
            : "border border-white/10 bg-white/5 hover:bg-white/10"
        }`}
      >
        {button}
      </button>
    </div>
  );
}
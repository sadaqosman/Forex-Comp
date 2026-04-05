import Image from "next/image";
import Countdown from "./countdown";

const officialLink = "https://one.justmarkets.link/a/aeiee04pty";
const verificationForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSfI8wyHzpLQzrmVa5QX7svmU9deebmzY-oUy9sCXSSxGRcerQ/viewform";
const youtubeEmbed = "https://www.youtube.com/embed/7Gt2lK0SjUg";

const steps = [
  {
    title: "Register Through The Official Link",
    body: "Use the tracked partner link.",
  },
  {
    title: "Deposit At Least $100",
    body: "Fund the account you will trade.",
  },
  {
    title: "Submit Proof For Manual Approval",
    body: "Manual review unlocks access.",
  },
];

const highlights = [
  { value: "1000", label: "Maximum accepted traders" },
  { value: "$100", label: "Minimum competition deposit" },
  { value: "30 Days", label: "Competition duration" },
];

const requirements = [
  "Register with the official partner link",
  "Deposit at least $100",
  "Have 1+ year trading experience",
  "Stay active during the competition",
];

const rules = [
  "Ranking is based on percentage account growth",
  "Minimum trading activity is required",
  "Risk management must be respected",
  "Cheating or manipulation means disqualification",
  "Only verified accounts are approved",
];

const rewards = [
  "Sponsored prop firm challenge accounts from 25K to 100K",
  "Support through the challenge stage",
  "Cash bonuses for top-ranked traders",
  "Access to a private elite trading group",
  "Opportunity to work directly with the team",
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/tradersconnectkenya/" },
  { label: "Telegram", href: "https://t.me/+kdhGwz1tGGFmZWZk" },
  { label: "TikTok", href: "https://www.tiktok.com/@tradersconnectkenya" },
  { label: "Email", href: "mailto:info@tradersconnectkenya.com" },
];

function SectionHeading({
  badge,
  title,
  body,
}: {
  badge: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-accent)]">
        {badge}
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">{body}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="relative overflow-hidden px-6 pt-8 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-6rem] h-[22rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/85 blur-3xl" />
          <div className="absolute left-[8%] top-36 h-64 w-64 rounded-full bg-white/80 blur-3xl" />
          <div className="absolute right-[8%] top-28 h-72 w-72 rounded-full bg-[#ebe7e0] blur-3xl" />
          <div className="absolute left-1/2 top-40 h-56 w-[70%] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.78),transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/traders-connect-kenya-logo.jpeg"
                alt="Traders Connect Kenya logo"
                width={62}
                height={62}
                className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                priority
              />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Traders Connect Kenya
                </p>
                <p className="mt-2 text-sm font-medium tracking-[-0.02em] text-[var(--color-ink)] sm:text-base">
                  Forex Capital Competition
                </p>
              </div>
            </div>

            <a
              href={officialLink}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[var(--color-line-strong)] bg-white/82 px-5 py-3 text-sm font-medium text-[var(--color-ink)] shadow-[0_8px_22px_rgba(24,21,18,0.03)] transition hover:bg-white sm:inline-flex"
            >
              Join Now
            </a>
          </header>

          <div className="pb-20 pt-16 text-center sm:pb-24 sm:pt-20">
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-white/92 px-4 py-2 shadow-[0_10px_24px_rgba(24,21,18,0.04)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#44ba6d]" />
              <span className="text-sm font-medium text-[#3d453e]">Application window is open</span>
            </div>

            <Countdown />

            <h1 className="mx-auto mt-8 max-w-5xl text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#292623] sm:text-4xl lg:text-5xl">
              Prove Yourself.
              <br />
              Get Funded With Real Capital
            </h1>

            <p className="mx-auto mt-5 max-w-4xl text-sm font-medium leading-7 text-[#625c56] sm:text-base">
              Most traders today have the skill but not the capital that can truly change their lives. We
              are here to help serious traders earn access to bigger capital and real opportunity. This is
              more than a competition, we are building future millionaires.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={officialLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/84 px-7 py-4 text-base font-medium text-[var(--color-ink)] shadow-[0_10px_24px_rgba(24,21,18,0.03)] transition hover:bg-white hover:shadow-[0_14px_28px_rgba(24,21,18,0.06)]"
              >
                Register First
              </a>
              <a
                href="#verification"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-transparent px-7 py-4 text-base font-medium text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
              >
                Verification Process
              </a>
            </div>

            <div className="mx-auto mt-10 max-w-4xl">
              <div className="overflow-hidden rounded-[24px] border border-[var(--color-line)] bg-[#111111] shadow-[0_25px_70px_rgba(24,21,18,0.10)]">
                <div className="aspect-video w-full">
                  <iframe
                    src={youtubeEmbed}
                    title="Forex Capital Competition briefing video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <div className="overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[rgba(255,255,255,0.62)] p-3 shadow-[0_38px_100px_rgba(24,21,18,0.10)] backdrop-blur-[10px]">
                <div className="grid min-h-[440px] overflow-hidden rounded-[22px] border border-[var(--color-line)] bg-[#fbfaf8] md:grid-cols-[84px_240px_1fr]">
                  <div className="flex flex-row justify-center gap-3 border-b border-[var(--color-line)] bg-[#f1ede7] p-4 md:flex-col md:justify-start md:border-b-0 md:border-r">
                    <div className="h-11 w-11 rounded-2xl bg-[#181512]" />
                    <div className="h-11 w-11 rounded-2xl border border-[var(--color-line)] bg-white" />
                    <div className="h-11 w-11 rounded-2xl border border-[var(--color-line)] bg-white" />
                    <div className="h-11 w-11 rounded-2xl border border-[var(--color-line)] bg-white" />
                  </div>

                  <div className="border-b border-[var(--color-line)] bg-[#f7f4f0] p-5 md:border-b-0 md:border-r">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                      Competition Flow
                    </p>
                    <div className="mt-5 space-y-3">
                      {steps.map((step, index) => (
                        <div
                          key={step.title}
                          className={`rounded-2xl border px-4 py-4 text-left ${
                            index === 1
                              ? "border-[#181512] bg-[#181512] text-white shadow-[0_18px_40px_rgba(24,21,18,0.14)]"
                              : "border-[var(--color-line)] bg-white text-[var(--color-muted)] shadow-[0_6px_18px_rgba(24,21,18,0.03)]"
                          }`}
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">
                            Step {index + 1}
                          </p>
                          <p className="mt-2 text-xs font-medium leading-5 sm:text-sm">{step.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-5 sm:p-7">
                    <div className="flex flex-col gap-4 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                          Competition Preview
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#22201d] sm:text-2xl">
                          Real Money. Real Discipline.
                        </h3>
                      </div>
                      <div className="rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-sm font-medium text-[#2a2826]">
                        10 days left
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {highlights.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-[var(--color-line)] bg-[#f7f4f0] p-4 text-left"
                        >
                          <p className="text-xs text-[var(--color-muted)] sm:text-sm">{item.label}</p>
                          <p className="mt-3 text-xl font-semibold text-[#22201d] sm:text-2xl">{item.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[22px] bg-[#181512] p-5 text-left text-white">
                      <p className="text-sm font-medium text-white/70">Why Real Money Instead Of Demo?</p>
                      <p className="mt-3 text-sm leading-7 text-white/86 sm:text-base">
                        Real money reveals discipline under pressure.
                      </p>
                    </div>

                    <div className="mt-6 rounded-[22px] border border-[var(--color-line)] bg-[#fcfbf9] p-5 text-left">
                      <p className="text-sm font-medium text-[var(--color-ink)]">
                        The official broker link lets us track valid accounts.
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                        It confirms who entered correctly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading
            badge="Process"
            title="A simple 3-step process"
            body="Register. Deposit. Submit proof."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[24px] border border-[var(--color-line)] bg-white/70 px-6 py-7 text-center shadow-[0_10px_30px_rgba(24,21,18,0.03)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-sm font-semibold text-[var(--color-ink)]">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--color-ink)] sm:text-[1.35rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="verification" className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            badge="Verification"
            title="Manual approval"
            body="Submit proof. Approved traders receive the next steps and private Telegram access."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] border border-[var(--color-line)] bg-white/70 px-5 py-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                What We Check
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Registration proof and $100 deposit proof.
              </p>
            </div>
            <div className="rounded-[22px] border border-[var(--color-line)] bg-white/70 px-5 py-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Why Approval Is Manual
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Only real and eligible traders are approved.
              </p>
            </div>
            <div className="rounded-[22px] border border-[var(--color-line)] bg-white/70 px-5 py-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                After Approval
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Approved traders move to the private Telegram group.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Open the form and submit your proof.
            </p>

            <div className="mt-6">
              <a
                href={verificationForm}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/84 px-8 py-4 text-base font-medium text-[var(--color-ink)] shadow-[0_10px_24px_rgba(24,21,18,0.03)] transition hover:bg-white hover:shadow-[0_14px_28px_rgba(24,21,18,0.06)]"
              >
                Open Verification Form
              </a>
            </div>

            <div className="mt-5">
              <a
                href={verificationForm}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[var(--color-muted)] underline decoration-[var(--color-line-strong)] underline-offset-4"
              >
                Open in a new tab
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading badge="Competition Details" title="What matters before you apply" />

          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            <section className="rounded-[24px] border border-[var(--color-line)] bg-white/60 px-6 py-7">
              <div className="border-b border-[var(--color-line)] pb-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Entry
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                  Requirements
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[var(--color-line)] bg-[#fcfbf9] px-4 py-3 text-sm font-medium leading-6 text-[var(--color-ink)] sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] border border-[var(--color-line)] bg-white/60 px-6 py-7">
              <div className="border-b border-[var(--color-line)] pb-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Rules
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">Rules</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {rules.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[var(--color-line)] bg-[#fcfbf9] px-4 py-3 text-sm font-medium leading-6 text-[var(--color-ink)] sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] border border-[var(--color-line)] bg-white/60 px-6 py-7">
              <div className="border-b border-[var(--color-line)] pb-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Outcome
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">Rewards</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {rewards.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[var(--color-line)] bg-[#fcfbf9] px-4 py-3 text-sm font-medium leading-6 text-[var(--color-ink)] sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-10 sm:px-8 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-4xl border-t border-[var(--color-line)] pt-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-accent)]">
            Final Note
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl">
            This is not for beginners. It is for traders ready to scale.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            If you trade with discipline, start with the official link, complete the $100 deposit, and submit proof.
          </p>
          <a
            href={officialLink}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/84 px-8 py-4 text-base font-medium text-[var(--color-ink)] shadow-[0_10px_24px_rgba(24,21,18,0.03)] transition hover:bg-white hover:shadow-[0_14px_28px_rgba(24,21,18,0.06)]"
          >
            Start Your Entry
          </a>
        </div>
      </section>

      <footer className="px-6 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl border-t border-[var(--color-line)] pt-8">
          <div className="grid gap-10 text-center lg:grid-cols-[1.3fr_1fr] lg:text-left">
            <div>
              <div className="mb-4 flex justify-center lg:justify-start">
                <Image
                  src="/traders-connect-kenya-logo.jpeg"
                  alt="Traders Connect Kenya logo"
                  width={86}
                  height={86}
                  className="h-[72px] w-[72px] rounded-full object-cover"
                />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Traders Connect Kenya
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                A new home for Kenyan forex traders.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                Built for disciplined traders ready for bigger opportunity.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--color-ink)]">Connect with Traders Connect Kenya</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
                {socials.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white/60 px-4 py-2 text-sm text-[var(--color-ink)] transition hover:bg-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
                Project creator:{" "}
                <a
                  href="https://www.instagram.com/sadaqfx/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-ink)] underline decoration-[var(--color-line-strong)] underline-offset-4"
                >
                  Sadaq FX
                </a>
              </p>

              <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
                Disclaimer: Forex trading carries a high level of risk and may not be suitable for every
                trader. Participation does not guarantee profits, funding, or future performance.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

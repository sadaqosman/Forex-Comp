import Image from "next/image";
import Countdown from "./countdown";

const officialLink = "https://one.justmarkets.link/a/aeiee04pty";
const verificationLink = "https://t.me/Sadaqfx";
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
    body: "Send proof on Telegram for approval.",
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
    <main className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-[var(--color-ink)]">
      <div className="site-background fixed inset-0 z-0" />

      <div className="relative z-10">
        <section className="px-6 pt-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-6xl">
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
                className="hidden rounded-full border border-[var(--color-line-strong)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-ink)] shadow-[0_8px_22px_rgba(24,21,18,0.03)] transition hover:bg-white sm:inline-flex"
              >
                Join Now
              </a>
            </header>

            <div className="pb-20 pt-16 text-center sm:pb-24 sm:pt-20">
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-white px-4 py-2 shadow-[0_10px_24px_rgba(24,21,18,0.04)]">
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
                Most traders have the skill but not the capital to truly change their lives. We&apos;re here to
                change that by giving serious traders access to real funding and bigger opportunities. This is
                more than a competition. It&apos;s where future millionaires are made.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={officialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white px-7 py-4 text-base font-medium text-[var(--color-ink)] shadow-[0_10px_24px_rgba(24,21,18,0.03)] transition hover:bg-white hover:shadow-[0_14px_28px_rgba(24,21,18,0.06)]"
                >
                  1. Register First
                </a>
                <a
                  href={verificationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white px-7 py-4 text-base font-medium text-[var(--color-ink)] shadow-[0_10px_24px_rgba(24,21,18,0.02)] transition hover:bg-white hover:shadow-[0_14px_28px_rgba(24,21,18,0.05)]"
                >
                  2. Verification Process
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
                <section className="overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-white shadow-[0_36px_90px_rgba(24,21,18,0.06)]">
                  <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
                    <div className="border-b border-[var(--color-line)] bg-white p-6 sm:p-8 lg:border-b-0 lg:border-r">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                          Competition Flow
                        </p>
                        <div className="rounded-full border border-[var(--color-line-strong)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)]">
                          8 days left
                        </div>
                      </div>

                      <div className="relative mt-8 space-y-4">
                        <div className="absolute bottom-5 left-5 top-5 hidden w-px bg-[var(--color-line)] sm:block" />
                        {steps.map((step, index) => (
                          <article
                            key={step.title}
                            className="relative rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5 shadow-[0_12px_28px_rgba(24,21,18,0.03)]"
                          >
                            <div className="flex items-start gap-4">
                              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white text-sm font-semibold text-[var(--color-ink)]">
                                {index + 1}
                              </div>
                              <div className="pt-1">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                                  Step {index + 1}
                                </p>
                                <h3 className="mt-3 text-lg font-semibold leading-snug tracking-[-0.02em] text-[var(--color-ink)]">
                                  {step.title}
                                </h3>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="border-b border-[var(--color-line)] pb-6 text-left">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                          Competition Preview
                        </p>
                        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-[2.2rem]">
                          Real Money. Real Discipline.
                        </h3>
                      </div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {highlights.map((item) => (
                          <article
                            key={item.label}
                            className="rounded-[22px] border border-[var(--color-line)] bg-[#fcfbf9] px-5 py-5"
                          >
                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                              {item.label}
                            </p>
                            <p className="mt-4 text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[var(--color-ink)]">
                              {item.value}
                            </p>
                          </article>
                        ))}
                      </div>

                      <div className="mt-6">
                        <article className="rounded-[24px] border border-[#221f1b] bg-[#181512] px-6 py-6 text-white shadow-[0_18px_42px_rgba(24,21,18,0.15)]">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/62">
                            Why Real Money Instead Of Demo?
                          </p>
                          <p className="mt-4 text-sm leading-7 text-white/84 sm:text-base">
                            Real money reveals discipline under pressure.
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                </section>
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
                  className="rounded-[24px] border border-[var(--color-line)] bg-white px-6 py-7 text-center shadow-[0_10px_30px_rgba(24,21,18,0.03)]"
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

        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <SectionHeading badge="Competition Details" title="What matters before you apply" />

            <div className="mt-14 grid gap-12 lg:grid-cols-3">
              <section className="rounded-[24px] border border-[var(--color-line)] bg-white px-6 py-7">
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

              <section className="rounded-[24px] border border-[var(--color-line)] bg-white px-6 py-7">
                <div className="border-b border-[var(--color-line)] pb-4 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Entry
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">Requirements</h3>
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

              <section className="rounded-[24px] border border-[var(--color-line)] bg-white px-6 py-7">
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
              If you trade with discipline, start with the official link, complete the $100 deposit, and send
              your proof for approval.
            </p>
            <a
              href={officialLink}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white px-8 py-4 text-base font-medium text-[var(--color-ink)] shadow-[0_10px_24px_rgba(24,21,18,0.03)] transition hover:bg-white hover:shadow-[0_14px_28px_rgba(24,21,18,0.06)]"
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
                      className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-ink)] transition hover:bg-white"
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
      </div>
    </main>
  );
}

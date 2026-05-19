import { useState } from "react";
import {
  SparklesIcon,
  ClockIcon,
  CreditCardIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/outline";
import { Footer } from "./Footer";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";

export default function RegistrationPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <SitePageShell>
      <SiteHeader
        mobileNavOpen={mobileNavOpen}
        onMobileNavToggle={() => setMobileNavOpen((v) => !v)}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-[calc(60px+2.5rem)] md:px-6 md:pb-28 md:pt-[calc(68px+4rem)]">
        <section className="site-panel rounded-3xl border border-uom-gold/50 bg-gradient-to-br from-white via-uom-goldSoft/20 to-white p-5 shadow-sm md:p-7">
          <Reveal variant="up" delayMs={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-uom-gold/40 bg-uom-goldSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
              <SparklesIcon className="h-3.5 w-3.5 text-uom-maroon" />
              Registration
            </div>
          </Reveal>
          <Reveal variant="up" delayMs={120}>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Registration opens soon
            </h1>
          </Reveal>
          <Reveal variant="up" delayMs={220}>
            <p className="mt-2 text-sm text-neutral-700 md:text-base">
              We are preparing a smooth registration experience for ICODE2026.
              You will see the complete details here once registration goes live.
            </p>
          </Reveal>

          <Reveal variant="scale" delayMs={320}>
            <div className="site-card-muted mt-6 rounded-2xl border border-uom-maroon/20 bg-white/85 p-4 shadow-sm md:p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-uom-goldSoft">
                <ClockIcon className="h-3.5 w-3.5" />
                Coming soon
              </div>

              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                <Reveal as="li" className="site-card rounded-xl border border-border bg-white p-3" variant="up" delayMs={0}>
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <DocumentTextIcon className="h-4 w-4 text-uom-maroon" />
                    Registration categories & fee table
                  </p>
                </Reveal>
                <Reveal as="li" className="site-card rounded-xl border border-border bg-white p-3" variant="up" delayMs={110}>
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <CreditCardIcon className="h-4 w-4 text-uom-maroon" />
                    Payment methods & invoice guidance
                  </p>
                </Reveal>
                <Reveal as="li" className="site-card rounded-xl border border-border bg-white p-3" variant="up" delayMs={220}>
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <SparklesIcon className="h-4 w-4 text-uom-maroon" />
                    Early-bird & group registration options
                  </p>
                </Reveal>
                <Reveal as="li" className="site-card rounded-xl border border-border bg-white p-3" variant="up" delayMs={330}>
                  <p className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <ClipboardDocumentCheckIcon className="h-4 w-4 text-uom-maroon" />
                    Registration form & confirmation workflow
                  </p>
                </Reveal>
              </ul>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </SitePageShell>
  );
}

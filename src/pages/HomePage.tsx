import React from "react";
import Layout from "../components/Layout";
import SectionIntro from "../components/SectionIntro";
import {
  blockedRegions,
  dashboardSrc,
  features,
  launchRegions,
  overviewSrc,
  visualizeItems,
} from "../data/siteContent";
import { fetchLatestRelease, type ReleaseResponse } from "../lib/api";

export default function HomePage() {
  const [release, setRelease] = React.useState<ReleaseResponse | null>(null);
  const [loadingRelease, setLoadingRelease] = React.useState(true);
  const [releaseError, setReleaseError] = React.useState("");

  React.useEffect(() => {
    let cancelled = false;

    async function loadRelease() {
      try {
        setLoadingRelease(true);
        setReleaseError("");

        const data = await fetchLatestRelease();
        if (cancelled) return;

        setRelease(data);
      } catch (err) {
        if (cancelled) return;
        setReleaseError(err instanceof Error ? err.message : "Failed to load release");
      } finally {
        if (!cancelled) setLoadingRelease(false);
      }
    }

    loadRelease();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout title="SoberTaper Home Preview">
      <section className="border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Educational simulation • Android first • Web planned
            </div>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Explore taper strategies through a visual simulation workflow.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              SoberTaper is an educational titration simulator that generates mathematically modeled
              simulated taper paths for visualization, learning, and discussion.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/5 px-4 py-3 text-sm leading-6 text-amber-100">
              Educational simulation only. Not medical advice, treatment instruction, prescribing
              support, or emergency guidance.
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/download"
                className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:scale-[1.02]"
              >
                Download Android APK
              </a>
              <a
                href="/pricing"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                See Pricing
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
              Supported rollout currently targets: {launchRegions.join(" • ")}
            </div>
            <div className="mt-3 text-sm text-slate-500">
              Current restricted-region preview list: {blockedRegions.join(" • ")}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white">Current release</div>

              {loadingRelease ? (
                <div className="mt-3 text-sm text-slate-300">Loading latest release...</div>
              ) : releaseError ? (
                <div className="mt-3 rounded-xl border border-amber-300/20 bg-amber-300/5 px-4 py-3 text-sm text-amber-100">
                  {releaseError}
                </div>
              ) : release ? (
                <div className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                  <div>
                    <span className="text-slate-100">Version:</span> {release.version}
                  </div>
                  <div>
                    <span className="text-slate-100">Channel:</span> {release.channel}
                  </div>
                  <div>
                    <span className="text-slate-100">Platform:</span> {release.platform}
                  </div>
                  <div>
                    <span className="text-slate-100">Minimum Android:</span> {release.minAndroid}
                  </div>
                  {release.notes?.length ? (
                    <div className="pt-1">
                      <div className="mb-2 text-slate-100">Highlights:</div>
                      <ul className="space-y-1 text-slate-300">
                        {release.notes.slice(0, 3).map((note) => (
                          <li key={note}>• {note}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div className="pt-3">
                    <a
                      href="/download"
                      className="inline-flex rounded-2xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                    >
                      View download details
                    </a>
                  </div>
                </div>
              ) : (
                <div className="mt-3 text-sm text-slate-300">No release data available.</div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-500/5">
            <div className="mb-3 text-sm font-medium text-slate-300">App preview</div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <img src={dashboardSrc} alt="SoberTaper dashboard screenshot" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          title="What it does"
          body="Built for simulation, visualization, and education while keeping the interface clear and mobile-first."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visualize" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionIntro
            title="What SoberTaper helps visualize"
            body="This keeps the product understandable without changing the simulation-first framing."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {visualizeItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm leading-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          title="Screenshots"
          body="Using your updated desktop screenshots and logo in the landing-page preview."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <img src={dashboardSrc} alt="Dashboard screenshot" className="w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Simulated taper chart view</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Shows simulated adherence, current simulated dose, taper charting, and the next simulated
              dose entry inside the main dashboard.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <img src={overviewSrc} alt="Overview screenshot" className="w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Simulation overview metrics</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Highlights the recent adaptation outlook, simulation percentage complete, and high-level
              overview metrics in a compact layout.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionIntro
            title="Regional availability"
            body="Availability may vary by geography, local law, payment support, and rollout stage."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-6">
              <h3 className="text-lg font-semibold text-white">Planned launch regions</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {launchRegions.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/5 p-6">
              <h3 className="text-lg font-semibold text-white">Restricted or blocked regions</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {blockedRegions.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
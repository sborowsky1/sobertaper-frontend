import Layout from "../components/Layout";

export default function WebAppPage() {
  return (
    <Layout title="Web App">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="text-3xl font-bold text-white">Web App Version</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            A browser-based version of SoberTaper is currently under development. The goal is to bring
            the core educational simulation workflow to the web while keeping the mobile app as the first release path.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-white">Planned web scope</div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                <li>Core simulation engine</li>
                <li>Graph visualization</li>
                <li>Saved plans</li>
                <li>Responsive layout</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-white">Status</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The web version is planned after the Android distribution flow, payment flow,
                and legal/region controls are settled.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
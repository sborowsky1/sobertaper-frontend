import Layout from "../components/Layout";

export default function TermsPage() {
  return (
    <Layout title="Terms">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="text-3xl font-bold text-white">Terms</h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
            <p>
              SoberTaper is provided as educational simulation software. Access may be limited or changed
              based on geography, payment provider constraints, rollout decisions, abuse prevention, or legal considerations.
            </p>
            <p>
              Users are responsible for complying with local law and for determining whether access or use
              is permitted in their jurisdiction.
            </p>
            <p>
              Any paid features should clearly disclose billing cadence, renewal, refund handling,
              and the scope of the purchased access tier.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
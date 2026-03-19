import Layout from "../components/Layout";

export default function PrivacyPage() {
  return (
    <Layout title="Privacy">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="text-3xl font-bold text-white">Privacy</h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
            <p>
              SoberTaper is designed around a local-first product posture where simulation data
              should remain on the user’s device by default unless future optional cloud-linked features are introduced.
            </p>
            <p>
              Payment processing, when enabled, should be handled by a dedicated provider such as Stripe
              rather than storing card information directly on SoberTaper systems.
            </p>
            <p>
              Operational analytics, if used, should remain limited to service reliability, fraud prevention,
              and platform security rather than advertising or cross-site profiling.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
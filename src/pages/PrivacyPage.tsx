import Layout from "../components/Layout";

export default function PrivacyPage() {
  return (
    <Layout title="Privacy">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="text-3xl font-bold text-white">Privacy</h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
            <p>
              SoberTaper was founded and developed around a privacy-first philosophy; 
              its app is designed around a local-first product posture where simulation data
              remains entirely on the user’s device at all times. We do not collect or store user data!
            </p>
            <p>
              All payment processing is handled by Stripe, a dedicated payment provider.
              No payment information or personal information of any kind is ever stored on SoberTaper systems.
            </p>
            <p>
              Operational analytics remain limited to service reliability and security - never to advertising or cross-site profiling.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
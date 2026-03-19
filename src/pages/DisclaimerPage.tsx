import Layout from "../components/Layout";

export default function DisclaimerPage() {
  return (
    <Layout title="Educational Disclaimer">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-amber-300/20 bg-amber-300/5 p-8">
          <h1 className="text-3xl font-bold text-white">Educational Disclaimer</h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-200">
            <p>
              SoberTaper is an educational titration simulator. It generates mathematically modeled
              simulated taper paths using user-entered parameters for visualization, exploration, and discussion purposes.
            </p>
            <p>
              SoberTaper does not provide medical advice, diagnosis, treatment recommendations,
              prescribing guidance, or binding dosing direction.
            </p>
            <p>
              All outputs should be understood as simulated example paths rather than directives for real-world use.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
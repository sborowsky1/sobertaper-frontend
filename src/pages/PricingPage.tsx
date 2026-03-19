import Layout from "../components/Layout";
import SectionIntro from "../components/SectionIntro";

export default function PricingPage() {
  return (
    <Layout title="Pricing">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionIntro
          title="Pricing"
          body="Keep the core simulation accessible while offering expanded libraries and advanced workflow options in paid tiers."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-sm font-medium text-slate-400">Free</div>
            <div className="mt-2 text-4xl font-bold text-white">$0</div>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>Core titration simulation engine</li>
              <li>Basic simulation graphs</li>
              <li>Reminders and simulation logging</li>
              <li>Essential drug set</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-8 shadow-xl shadow-cyan-500/10">
            <div className="text-sm font-medium text-cyan-200">Premium</div>
            <div className="mt-2 text-4xl font-bold text-white">TBD</div>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>Expanded drug library</li>
              <li>Custom split-size and dosage-form controls</li>
              <li>Advanced simulation configuration</li>
              <li>Multiple saved plans</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-slate-300">
          Stripe-ready checkout scaffolding would normally sit behind this page: plan selection, billing interval,
          payment form, receipt handling, and region-based availability checks.
        </div>
      </section>
    </Layout>
  );
}
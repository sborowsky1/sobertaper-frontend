import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout title="Contact">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="text-3xl font-bold text-white">Contact</h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            For launch updates, support routing, and future distribution announcements,
            add your preferred contact channel here.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm leading-7 text-slate-300">
            Example placeholder: support@sobertaper.example
          </div>
        </div>
      </section>
    </Layout>
  );
}
import React from "react";
import Layout from "../components/Layout";
import {
  fetchLatestRelease,
  fetchManifest,
  type ManifestResponse,
  type ReleaseResponse,
} from "../lib/api";

export default function DownloadPage() {
  const [manifest, setManifest] = React.useState<ManifestResponse | null>(null);
  const [release, setRelease] = React.useState<ReleaseResponse | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [accepted, setAccepted] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;

    async function loadDownloadData() {
      try {
        setLoading(true);
        setError("");

        const [releaseJson, manifestJson] = await Promise.all([
          fetchLatestRelease(),
          fetchManifest(),
        ]);

        if (cancelled) return;

        setRelease(releaseJson);
        setManifest(manifestJson);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadDownloadData();

    return () => {
      cancelled = true;
    };
  }, []);

  const canDownload = !!manifest?.downloadAvailable && !!manifest?.downloadUrl && accepted;

  return (
    <Layout title="Download">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="text-3xl font-bold text-white">Download Android APK</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            SoberTaper is distributed directly through this website for supported regions.
            This software is intended for educational simulation and discussion use only.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-white">Install instructions</div>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-300">
                <li>Download the APK file.</li>
                <li>Open the file on your Android device.</li>
                <li>If prompted, allow installation from this source.</li>
                <li>Install and open SoberTaper.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-white">Live release details</div>

              {loading ? (
                <div className="mt-4 text-sm text-slate-300">Loading release metadata...</div>
              ) : error ? (
                <div className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/5 px-4 py-3 text-sm text-amber-100">
                  {error}
                </div>
              ) : (
                <div className="mt-4 space-y-2 text-sm leading-7 text-slate-300 break-all">
                  <div><span className="text-slate-100">Version:</span> {manifest?.version ?? release?.version ?? "—"}</div>
                  <div><span className="text-slate-100">Channel:</span> {release?.channel ?? "—"}</div>
                  <div><span className="text-slate-100">Platform:</span> {manifest?.platform ?? release?.platform ?? "—"}</div>
                  <div><span className="text-slate-100">File type:</span> {manifest?.fileType ?? "apk"}</div>
                  <div><span className="text-slate-100">Minimum Android:</span> {manifest?.minAndroid ?? release?.minAndroid ?? "—"}</div>
                  <div><span className="text-slate-100">SHA256:</span> {manifest?.sha256 ?? "E466588F6DDF413515E7E17D9BB0F8CBD2C8BEA4C7EEC87E8F5FA4101635E514"}</div>
                  <div><span className="text-slate-100">Download available:</span> {manifest?.downloadAvailable ? "Yes" : "No"}</div>
                  <div><span className="text-slate-100">Download URL:</span> {manifest?.downloadUrl ?? "—"}</div>
                  <div><span className="text-slate-100">API Base:</span> {import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000"}</div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5 text-sm leading-7 text-slate-300">
            Availability may be limited by geography, payment support, legal environment, and rollout stage.
          </div>

          {release?.notes?.length ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-sm font-semibold text-white">Release notes</div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                {release.notes.map((note) => (
                  <li key={note}>• {note}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-4">
            <label className="flex w-full items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-6 text-slate-300">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span>
                I understand SoberTaper is educational simulation software and not medical advice,
                treatment instruction, prescribing guidance, or emergency guidance.
              </span>
            </label>

            <a
              href={canDownload ? manifest!.downloadUrl : "#"}
              className={`rounded-2xl px-5 py-3 text-sm font-semibold ${
                canDownload
                  ? "bg-cyan-400 text-slate-950"
                  : "cursor-not-allowed bg-slate-700 text-slate-300"
              }`}
              onClick={(e) => {
                if (!canDownload) e.preventDefault();
              }}
            >
              Download APK
            </a>

            <a
              href="/disclaimer"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white"
            >
              Read Disclaimer
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
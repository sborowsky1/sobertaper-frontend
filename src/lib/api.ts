export type ReleaseResponse = {
  version: string;
  channel: string;
  platform: string;
  minAndroid: string;
  notes: string[];
};

export type ManifestResponse = {
  version: string;
  versionCode: number;
  platform: string;
  fileType: string;
  minAndroid: string;
  sha256: string;
  downloadAvailable: boolean;
  downloadUrl: string;
};

const API_BASE =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "http://localhost:4000";

async function parseJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchLatestRelease(): Promise<ReleaseResponse> {
  const res = await fetch(`${API_BASE}/api/releases/latest`);
  return parseJson<ReleaseResponse>(res);
}

export async function fetchManifest(): Promise<ManifestResponse> {
  const res = await fetch(`${API_BASE}/api/download/manifest`);
  return parseJson<ManifestResponse>(res);
}
/**
 * Newest release of each app, looked up when the site is built. If GitHub
 * cannot be reached the site is built without version numbers.
 */
import type { App } from "../data/apps";

export interface Release {
  version: string;
  url: string;
  appImage?: string;
  deb?: string;
}

interface GhRelease {
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  html_url: string;
  assets: { name: string; browser_download_url: string }[];
}

const cache = new Map<string, Promise<GhRelease[]>>();

function releasesOf(repo: string): Promise<GhRelease[]> {
  if (!cache.has(repo)) {
    cache.set(
      repo,
      fetch(`https://api.github.com/repos/${repo}/releases?per_page=100`, {
        headers: { Accept: "application/vnd.github+json", "User-Agent": "be-spex-site" },
      })
        .then((r) => (r.ok ? (r.json() as Promise<GhRelease[]>) : []))
        .catch(() => []),
    );
  }
  return cache.get(repo)!;
}

export async function latestRelease(app: App): Promise<Release | null> {
  const all = await releasesOf(app.repo);
  const r = all.find((x) => !x.draft && !x.prerelease && x.tag_name.startsWith(app.tagPrefix));
  if (!r) return null;
  const asset = (end: string) => r.assets.find((a) => a.name.endsWith(end))?.browser_download_url;
  return {
    version: r.tag_name.slice(app.tagPrefix.length),
    url: r.html_url,
    appImage: asset(".AppImage"),
    deb: asset(".deb"),
  };
}

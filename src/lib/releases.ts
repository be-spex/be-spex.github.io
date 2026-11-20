/**
 * Download links of each app's newest release, looked up when the site is built.
 * The site names no version numbers: they would go stale between builds. If GitHub
 * cannot be reached, the links lead to the list of releases instead.
 */
import type { App } from "../data/apps";

export interface Release {
  appImage?: string;
  deb?: string;
  /** Windows installer (NSIS, `*_x64-setup.exe`). */
  windows?: string;
}

interface GhRelease {
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  assets: { name: string; browser_download_url: string }[];
}

const cache = new Map<string, Promise<GhRelease[]>>();

function releasesOf(repo: string): Promise<GhRelease[]> {
  if (!cache.has(repo)) {
    cache.set(
      repo,
      fetch(`https://api.github.com/repos/${repo}/releases?per_page=100`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "be-spex-site",
          // in CI: the workflow token, so the lookups do not run into the limit for anonymous calls
          ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
        },
      })
        .then((r) => {
          if (!r.ok) console.warn(`releases of ${repo}: HTTP ${r.status}, linking the release list instead`);
          return r.ok ? (r.json() as Promise<GhRelease[]>) : [];
        })
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
    appImage: asset(".AppImage"),
    deb: asset(".deb"),
    windows: asset("_x64-setup.exe"),
  };
}

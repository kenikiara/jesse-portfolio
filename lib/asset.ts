// Prefix a /public asset path with the deployment basePath.
// Empty for local dev and cPanel (domain root); "/jesse-portfolio" on GitHub Pages.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${BASE}${path}`;
}

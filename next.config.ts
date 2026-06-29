import type { NextConfig } from "next";

// Static export so the site runs on GitHub Pages now and cPanel later.
// On GitHub Pages (project site) assets live under /<repo>, so we set basePath
// only when building in the GitHub Actions workflow (GITHUB_PAGES=true).
// For cPanel (served from a domain root) leave GITHUB_PAGES unset -> empty basePath.
const repo = "jesse-portfolio";
const isGhPages = process.env.GITHUB_PAGES === "true";

const basePath = isGhPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGhPages ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  // Exposed to the client so <Image> src strings (in /public) can be prefixed
  // with the basePath — next/image does not do this automatically for
  // unoptimized static exports.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

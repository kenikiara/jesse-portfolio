import type { NextConfig } from "next";

// Static export so the site runs on GitHub Pages now and cPanel later.
// On GitHub Pages (project site) assets live under /<repo>, so we set basePath
// only when building in the GitHub Actions workflow (GITHUB_PAGES=true).
// For cPanel (served from a domain root) leave GITHUB_PAGES unset -> empty basePath.
const repo = "jesse-portfolio";
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGhPages ? `/${repo}` : "",
  assetPrefix: isGhPages ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

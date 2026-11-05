import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const edge = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].find(existsSync);

if (!edge) throw new Error("Microsoft Edge est introuvable.");

function run(...args) {
  const profile = mkdtempSync(join(tmpdir(), "portfolio-assets-"));
  execFileSync(edge, ["--headless=new", "--disable-gpu", `--user-data-dir=${profile}`, ...args], {
    stdio: "ignore",
  });
  rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}

for (const [source, output] of [
  ["cv/fr.html", "public/Maxime_Brucale_CV_FR.pdf"],
  ["cv/en.html", "public/Maxime_Brucale_CV_EN.pdf"],
]) {
  run(
    "--no-pdf-header-footer",
    `--print-to-pdf=${join(root, output)}`,
    pathToFileURL(join(root, source)).href,
  );
  console.log(output);
}

for (const lang of ["fr", "en"]) {
  const page = pathToFileURL(join(root, "scripts/og.html"));
  page.search = lang;
  run(
    `--screenshot=${join(root, `public/og-${lang}.png`)}`,
    "--window-size=1200,630",
    "--hide-scrollbars",
    "--virtual-time-budget=4000",
    page.href,
  );
  console.log(`public/og-${lang}.png`);
}

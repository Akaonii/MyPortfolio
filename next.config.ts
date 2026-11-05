import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "form-action 'self' https://formspree.io",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const decoyPaths = ["/admin", "/wp-admin", "/wp-login.php", "/phpmyadmin", "/.env", "/backup.zip"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      { source: "/", destination: "/fr", permanent: false },
      { source: "/cv.pdf", destination: "/Maxime_Brucale_CV_FR.pdf", permanent: false },
      ...decoyPaths.map((source) => ({ source, destination: "/fr/admin", permanent: false })),
    ];
  },
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

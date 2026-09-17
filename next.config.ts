import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["resend"],
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;

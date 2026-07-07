import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  // output: "export", // Removed for API routes support
  serverExternalPackages: ["firebase", "@firebase/firestore", "@grpc/grpc-js"],
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@grpc/grpc-js');
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/__/auth/:path*',
        destination: 'https://ai-videos-e6e03.firebaseapp.com/__/auth/:path*',
      },
    ];
  },
  /* 
  // Next.js static export does not support custom headers()
  async headers() {
    return [
      {
        // long-cache the static mp4 assets served from /public
        source: "/:folder(Ai-[^/]+)/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  */
};

export default nextConfig;

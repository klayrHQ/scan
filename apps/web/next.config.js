module.exports = {
  reactStrictMode: false,
  outputFileTracing: true,
  // appDir: true,
  output: "standalone",
  transpilePackages: ["ui", "tailwindconfig"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "collectibles.cluster.liskscan.com",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "liskscan.com",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "klayr.xyz",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/",
      },
    ],
  },
  swcMinify: true, // ensure SWC minification is enabled
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error", "warn"], // keep error & warn, remove log/debug/info
          },
        }
      : undefined,
  webpack: (config, { dev }) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    return config;
  },
};

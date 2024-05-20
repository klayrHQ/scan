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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })
    return config
  },
};

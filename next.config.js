/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
    unoptimized: true,
  },
  webpack: (config, { webpack }) => {
    // Ignore the entire src directory (old Vite code)
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/src\//,
        contextRegExp: /\.$/,
      })
    );
    return config;
  },
}

module.exports = nextConfig


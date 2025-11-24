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
    // Enable image optimization for better performance
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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


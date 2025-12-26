/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Uncomment và sửa tên repo nếu deploy lên GitHub Pages
  // basePath: '/test123',
  // assetPrefix: '/test123/',
};

export default nextConfig;

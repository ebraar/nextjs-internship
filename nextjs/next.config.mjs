/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/15574931/pexels-photo-15574931/free-photo-of-pencereler-camlar-kentsel-cephe.jpeg',
        },
    ],
}
};

export default nextConfig;

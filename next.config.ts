import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy .com & .in URL migrations to official canonical paths (P0-04)
      {
        source: '/q-switched-laser-melasma-pigmentation-bangalore',
        destination: '/treatments/laser/q-switched-laser/',
        permanent: true,
      },
      {
        source: '/q-switched-laser-melasma-pigmentation-bangalore/',
        destination: '/treatments/laser/q-switched-laser/',
        permanent: true,
      },
      {
        source: '/hydrafacial-bangalore',
        destination: '/treatments/aesthetics/hydrafacial/',
        permanent: true,
      },
      {
        source: '/hydrafacial-bangalore/',
        destination: '/treatments/aesthetics/hydrafacial/',
        permanent: true,
      },
      {
        source: '/laser-hair-removal',
        destination: '/treatments/laser/laser-hair-reduction/',
        permanent: true,
      },
      {
        source: '/laser-hair-removal/',
        destination: '/treatments/laser/laser-hair-reduction/',
        permanent: true,
      },
      {
        source: '/prp-hair',
        destination: '/treatments/hair/prp-gfc/',
        permanent: true,
      },
      {
        source: '/prp-hair/',
        destination: '/treatments/hair/prp-gfc/',
        permanent: true,
      },
      {
        source: '/gfc-hair',
        destination: '/treatments/hair/prp-gfc/',
        permanent: true,
      },
      {
        source: '/gfc-hair/',
        destination: '/treatments/hair/prp-gfc/',
        permanent: true,
      },
      {
        source: '/growth-factor-therapy',
        destination: '/treatments/hair/prp-gfc/',
        permanent: true,
      },
      {
        source: '/growth-factor-therapy/',
        destination: '/treatments/hair/prp-gfc/',
        permanent: true,
      },
      {
        source: '/about-doctor',
        destination: '/doctors/dr-sujay-m/',
        permanent: true,
      },
      {
        source: '/about-doctor/',
        destination: '/doctors/dr-sujay-m/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/book-appointment-online',
        destination: '/book-appointment/',
        permanent: true,
      },
      {
        source: '/book-appointment-online/',
        destination: '/book-appointment/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

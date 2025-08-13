// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// 👉 le plugin doit pointer vers le *request config*
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

export default withNextIntl(nextConfig);

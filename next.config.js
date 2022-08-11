/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
		skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
  },
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
});

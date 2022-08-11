/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
  pwa: {
    dest: 'public',
    runtimeCaching
  }
});

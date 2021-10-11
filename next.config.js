/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer:
        // test: /\.(js|ts)x?$/,
        // for webpack 5 use
        { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

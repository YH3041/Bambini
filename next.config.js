/** @type {import('next').NextConfig} */
const path = require('path');
const dotenv = require('dotenv');

const envPath = (envFile) => path.join(__dirname, 'envs', envFile);

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: envPath('.env.production') });
} else if (process.env.NODE_ENV === 'stage') {
  dotenv.config({ path: envPath('.env.stage') });
} else {
  dotenv.config({ path: envPath('.env.development') });
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['image.tmdb.org'] },
  sassOptions: {
    prependData: `@import "styles/mixins.scss";`
  }
};

module.exports = nextConfig;
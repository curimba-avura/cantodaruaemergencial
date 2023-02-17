/**
 * @type {import('next').NextConfig}
 */
/* eslint-disable */
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: true,
});

const isGithubActions = process.env.IS_GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.NAME_GITHUB_REPOSITORY;

  assetPrefix = `/${repo}`;
  basePath = `/${repo}`;
}

const { APP_ID, API_KEY, PROJECT_ID, MEASUREMENT_ID, MESSAGING_SENDER_ID } =
  process.env;

module.exports = withPWA({
  assetPrefix,
  basePath,
  // other next config
  // environment variable
  env: {
    APP_ID,
    API_KEY,
    PROJECT_ID,
    MEASUREMENT_ID,
    MESSAGING_SENDER_ID,
  },
});

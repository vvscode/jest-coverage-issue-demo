/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const baseConfig = require('./jest.config.js');

const config = {
  ...baseConfig,
  collectCoverageFrom: ['src/**/*.js'],
};

module.exports = config;

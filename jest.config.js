module.exports = {
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: './tests/setupTests.js',
  "transform": {
      ".+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
};

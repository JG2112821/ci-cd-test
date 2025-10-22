module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js'
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 100,
      lines: 50,
      statements: 50
    }
  },
  testMatch: [
    '**/test/**/*.test.js'
  ]
};

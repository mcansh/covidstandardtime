module.exports = {
  testURL: 'http://localhost:3000/',
  testMatch: ['**/__tests__/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/types/'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgrMock.js',
    '~/(.*)': '<rootDir>/$1',
  },
};

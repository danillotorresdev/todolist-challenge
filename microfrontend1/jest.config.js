module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

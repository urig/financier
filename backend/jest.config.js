module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/dist/src/$1"
  },
};
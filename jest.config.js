/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
    moduleNameMapper: { '^.+\\.css$': '<rootDir>/src/Globals.d.ts' },
};

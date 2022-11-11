/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.ts?$": "esbuild-jest",
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testMatch: ["**/tests/unit/*.test.ts"],
    modulePathIgnorePatterns: ["<rootDir>/.aws-sam"],
}

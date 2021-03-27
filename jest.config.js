const path = require("path");
module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["lib/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)"],
  transform: {
    "^.+unit\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: [path.resolve(__dirname, "./setup-enzyme.ts")],
};

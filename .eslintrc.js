module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ["standard"],
  plugins: ["standard"],
  rules: {
    semi: [2, "always"],
  },
};

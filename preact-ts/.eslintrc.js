module.exports = {
  env: {
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["*.js"], // ignore root .js config files
  rules: {},
  settings: {
    react: {
      pragma: "h",
      version: "latest",
    },
  },
};

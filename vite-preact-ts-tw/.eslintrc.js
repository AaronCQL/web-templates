module.exports = {
  env: {
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
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
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/react-in-jsx-scope": "off", // react is already imported globally
        "react/prop-types": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
};

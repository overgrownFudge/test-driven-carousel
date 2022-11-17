module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    // sourceType: 'module' tells ESLint that our code will run in an environment that supports ES2015 (a.k.a. ES6)
  },
  env: {
    node: true,
  },
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"],
  },
  settings: {
    react: {
      version: "16.4.2",
    },
  },
};

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

// eslint.config.js

import { defineConfig } from "eslint-define-config";

export default defineConfig({
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
  },
  ignorePatterns: ["node_modules/*"],
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.cjs", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: {
        react: {
          version: "detect",
        },
        "import/resolver": {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      plugins: [
        "react",
        "react-hooks",
        "jsx-a11y",
        "import",
        "testing-library",
        "jest-dom",
        "no-relative-import-paths",
        "@typescript-eslint",
      ],
      extends: [
        "eslint:recommended",
        "plugin:import/warnings",
        "plugin:import/errors",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:testing-library/react",
        "plugin:jsx-a11y/recommended",
        "plugin:jest-dom/recommended",
        "plugin:prettier/recommended", // Prettier integration
      ],
      rules: {
        "eol-last": ["error", "always"],
        "no-relative-import-paths/no-relative-import-paths": [
          "error",
          {
            allowSameFolder: true,
            rootDir: "src",
          },
        ],
        "quote-props": [
          "error",
          "as-needed",
          {
            keywords: false,
            unnecessary: true,
          },
        ],
        quotes: [
          "error",
          "single",
          {
            avoidEscape: true,
          },
        ],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-tag-spacing": [
          "error",
          {
            closingSlash: "never",
            beforeSelfClosing: "never",
            afterOpening: "never",
            beforeClosing: "never",
          },
        ],
        "space-before-function-paren": ["error", "never"],
        "react/jsx-curly-spacing": [
          "error",
          {
            when: "never",
            children: true,
          },
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "array-bracket-spacing": ["error", "always"],
        "no-multi-spaces": "error",
        "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-indent": ["error", 2],
        "object-curly-spacing": ["error", "always"],
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "space-before-blocks": "error",
        "no-trailing-spaces": "error",
        indent: "off",
        "@typescript-eslint/indent": ["error", 2],
        "id-length": "off",
        "no-multiple-empty-lines": [
          "error",
          {
            max: 1,
          },
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        semi: ["error", "always"],
        "jsx-quotes": ["error", "prefer-double"],
        "comma-dangle": ["error", "always-multiline"],
        "testing-library/no-node-access": "off",
        "testing-library/no-container": "off",
        "testing-library/prefer-screen-queries": "off",
        "no-empty-pattern": "off",
        "no-restricted-imports": [
          "error",
          {
            patterns: ["@/features/*/*"],
          },
        ],
        "linebreak-style": "off",
        "react/prop-types": "off",
        "import/order": [
          "error",
          {
            groups: [],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-var-requires": "off",
        "prettier/prettier": [
          "warn",
          {
            arrowParens: "always",
            semi: true,
            trailingComma: "none",
            tabWidth: 2,
            endOfLine: "auto",
            useTabs: false,
            singleQuote: true,
            printWidth: 120,
            jsxSingleQuote: false,
          },
        ],
      },
    },
  ],
  globals: {
    process: true,
  },
});

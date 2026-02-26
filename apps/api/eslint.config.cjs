// apps/api/eslint.config.cjs
const path = require('path')
const globals = require('globals')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const prettierPlugin = require('eslint-plugin-prettier')
const tsParser = require('@typescript-eslint/parser')

module.exports = [
  // Ignore compiled files and dependencies
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // Lint all TypeScript source files
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'warn',

      // Prettier
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
]

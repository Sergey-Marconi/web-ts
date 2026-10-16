import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['tests/**/*.ts'],
    extends: [playwright.configs['flat/recommended']],
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      'playwright/no-focused-test': 'error',
      // В BDD-шагах expect и ожидания объявляются вне test-блока
      'playwright/no-standalone-expect': 'off',
      'playwright/no-wait-for-timeout': 'warn',
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    ignores: [
      'node_modules/',
      '.features-gen/',
      'playwright-report/',
      'test-results/',
      'eslint.config.js',
    ],
  }
);

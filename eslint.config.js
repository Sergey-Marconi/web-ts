// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  // 1. Базовые рекомендованные правила ESLint
  js.configs.recommended,

  // 2. Рекомендованные правила для TypeScript с проверкой типов
  ...tseslint.configs.recommendedTypeChecked,

  // 3. Правила специально для ваших Playwright-тестов
  {
    files: ['tests/**/*.ts'], // ← Укажите путь к вашим тестам (например, tests/**)
    extends: [playwright.configs['flat/recommended']],
    rules: {
      // Ловит забытые await — самая частая причина нестабильных тестов [citation:16]
      '@typescript-eslint/no-floating-promises': 'error',
      // Запрещает .only, который случайно может сломать весь CI
      'playwright/no-focused-test': 'error',
      // Отключаем в BDD-шагах (expect используется вне test блока)
      'playwright/no-standalone-expect': 'off',
      // Ожидания в BDD-шагах допустимы
      'playwright/no-wait-for-timeout': 'warn',
    },
  },

  // 4. Настройка для чтения типов (нужна для правила no-floating-promises)
  {
    languageOptions: {
      parserOptions: {
        project: true, // Указывает ESLint использовать ваш tsconfig.json
      },
    },
  },

  // 5. Игнорирование служебных папок и файлов
  {
    ignores: [
      'node_modules/',
      '.features-gen/', // Сгенерированные тесты Playwright-BDD
      'playwright-report/',
      'test-results/',
      'eslint.config.js', // Сам конфиг ESLint
    ],
  },
);

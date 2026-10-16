# web-ts

Автоматизированные BDD-тесты веб-интерфейса на TypeScript (Playwright + Gherkin).

## Технологии

| Компонент | Версия | Назначение |
| --- | --- | --- |
| [@playwright/test](https://playwright.dev) | ^1.64 | Браузерная автоматизация |
| [playwright-bdd](https://github.com/playwright-community/playwright-bdd) | ^9.2 | BDD-сценарии на Gherkin |
| [TypeScript](https://www.typescriptlang.org) | ^6.0 | Типизация, strict-режим |
| [ESLint](https://eslint.org) + typescript-eslint | ^10 / ^8 | Статический анализ |
| [Prettier](https://prettier.io) | ^3.9 | Форматирование кода |

## Быстрый старт

```bash
# Установка зависимостей
npm ci

# Установка браузера Chromium
npx playwright install --with-deps chromium

# Запуск тестов (сценарии с тегом @tag)
npm test
```

## Скрипты

| Команда | Описание |
| --- | --- |
| `npm test` | Генерация BDD-тестов (`bddgen`) и запуск сценариев с тегом `@tag` |
| `npm run lint` | Проверка кода ESLint |
| `npm run lint:fix` | Проверка с автоисправлением |

Отчёт строится в `playwright-report/`, артефакты упавших тестов — в `test-results/`.

## Переменные окружения

Настраиваются через `.env` в корне проекта (загружается через `dotenv`).

| Переменная | Описание |
| --- | --- |
| `PROXY` | Адрес прокси. Если не задан, прокси не используется |
| `CI` | Признак CI-среды: включает 2 ретрая, 1 воркер, запрет `.only` |

## Структура проекта

```
web-ts/
├── .github/workflows/
│   └── test.yml              # CI: lint + запуск тестов
├── tests/
│   ├── features/             # BDD-сценарии (.feature)
│   │   └── test.feature
│   ├── page/                 # Page Objects: локаторы страниц
│   │   └── auth.page.ts
│   └── steps/                # Реализация шагов Gherkin
│       └── auth.steps.ts
├── cucumber.json             # Конфиг Cucumber JS
├── eslint.config.js          # Конфиг ESLint
├── playwright.config.ts      # Конфиг Playwright и playwright-bdd
└── tsconfig.json             # Конфиг TypeScript
```

## Архитектура

**Page Object** — слой `tests/page/` хранит только селекторы страницы. Селекторы вынесены из шагов, чтобы правка вёрстки затрагивала один файл.

**BDD Steps** — слой `tests/steps/` связывает строки из `.feature` с Playwright-действиями. Шаги объявляются регулярными выражениями и получают `page` через фикстуры Playwright, поэтому браузер создаётся и закрывается фреймворком автоматически.

**Features** — слой `tests/features/` содержит сценарии на русском языке (`# language: ru`) с тегами для выборочного запуска: `@tag`, `@auth-login`, `@auth-back`, `@auth-register`.

Запуск сценариев по тегу:

```bash
npx bddgen && npx playwright test --grep "@auth-login"
```

## Добавление нового теста

1. Описать сценарий в `tests/features/` и пометить тегом.
2. Добавить недостающие селекторы в Page Object нужной страницы.
3. Реализовать шаги в `tests/steps/`, используя фикстуру `page`.
4. Проверить типы и линтер: `npx tsc --noEmit && npm run lint`.

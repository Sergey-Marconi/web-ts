import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config();

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: 'tests/steps/**/*.ts',
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
<<<<<<< HEAD
  reporter: [['html', { open: 'never' }]],
  use: {
    locale: 'ru-RU',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    proxy: process.env.PROXY
      ? { server: process.env.PROXY }
      : undefined,
=======
  reporter: [['html', { open: 'never' }]], //Отключает открытие localhost при падении теста
  use: {
    proxy: {
      server: process.env.PROXY, // Работает, если включен впн
    },
    locale: 'ru-RU',
    // baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
>>>>>>> origin/main
  },
  projects: [
    {
      name: 'chromium',
<<<<<<< HEAD
      use: { ...devices['Desktop Chrome'] },
=======
      use: { ...devices['Desktop Chrome'], headless: false },
>>>>>>> origin/main
    },
  ],
});

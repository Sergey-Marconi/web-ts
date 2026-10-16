import { pageMap } from './page.map.ts';

/**
 * Базовый URL приложения.
 * Задается переменной окружения BASE_URL в файле .env
 * (загружается через dotenv в playwright.config.ts).
 */
function getBaseUrl(): string {
  const baseUrl = process.env.BASE_URL;
  if (!baseUrl) {
    throw new Error('BASE_URL is not set. Define it in .env file.');
  }
  return baseUrl.replace(/\/+$/, '');
}

/**
 * Возвращает полный адрес страницы по её названию из pageMap.
 * Пример: 'Личный кабинет' -> 'https://vk.ru/lk'
 */
export function getPageUrl(pageName: string): string {
  const path = pageMap[pageName];
  if (path === undefined) {
    throw new Error(`Page "${pageName}" not found in page.map.ts`);
  }
  return `${getBaseUrl()}${path === '/' ? '' : path}`;
}

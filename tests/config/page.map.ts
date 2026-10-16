/**
 * Пути страниц относительно базового URL.
 * Базовый URL задается переменной окружения BASE_URL (см. getPageUrl).
 */
export const pageMap: Record<string, string> = {
  Главная: '/',
  'Личный кабинет': '/lk',
  Авторизация: '/login',
};

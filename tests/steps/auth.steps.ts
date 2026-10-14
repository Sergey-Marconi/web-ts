import { expect } from '@playwright/test';
import { createBdd, DataTable } from 'playwright-bdd';
import { AuthPage } from '../page/auth.page';

const { Given, Then, When } = createBdd();
const authPage = new AuthPage();

// ==================== Начало сценария ====================

Given(/^пользователь перешел на страницу "([^"]*)"$/, async ({ page }, pageUrl: string) => {
  await page.goto(pageUrl);
});

// ==================== Ожидания ====================

Then(/^система находится в состоянии ожидания (\d+) секунд$/, async ({ page }, time: number) => {
  // eslint-disable-next-line playwright/no-wait-for-timeout
  await page.waitForTimeout(time * 1000);
});

// ==================== Проверки заголовков ====================

Then(/^на главной странице отображается заголовок "([^"]*)"$/, async ({ page }, title: string) => {
  await expect(page.getByText(title, { exact: true })).toBeVisible({ timeout: 10000 });
});

// ==================== Проверки кнопок ====================

Then(/^на главной странице отображаются кнопки:$/, async ({ page }, btns: DataTable) => {
  const buttons = await page.locator(authPage.selectors.getButtons).all();
  const rows = btns.raw();

  for (let i = 0; i < rows.length; i++) {
    const [expectedText] = rows[i];
    await expect(buttons[i]).toHaveText(expectedText, { timeout: 5000 });
  }
});

// ==================== Клики по кнопкам ====================

Given(/^пользователь нажал на кнопку "([^"]*)"$/, async ({ page }, name: string) => {
  await page.getByRole('button', { name }).click();
});

// ==================== Проверки табов входа ====================

Then(/^отображаются кнопки выбора входа на сайт:$/, async ({ page }, sliders: DataTable) => {
  const rows = sliders.raw();

  for (let i = 0; i < rows.length; i++) {
    const [expectedText] = rows[i];
    await expect(page.getByText(expectedText, { exact: true })).toBeVisible({ timeout: 5000 });
  }
});

Then(
  /^на главной странице активна кнопка входа "([^"]*)"$/,
  async ({ page }, activeBtn: string) => {
    await expect(page.getByText(activeBtn, { exact: true })).toBeVisible({ timeout: 5000 });
  }
);

// ==================== Поля ввода ====================

Then(/^отображается окно ввода номера телефона для авторизации$/, async ({ page }) => {
  await expect(page.locator(authPage.selectors.inputPhoneOrLogin)).toBeVisible({ timeout: 5000 });
});

Given(
  /^пользователь ввел номер телефона для входа "([^"]*)"$/,
  async ({ page }, number: string) => {
    const input = page.locator(authPage.selectors.inputPhoneOrLogin);
    await input.waitFor({ state: 'visible', timeout: 5000 });
    await input.fill(number);
  }
);

Then(/^отображается поле ввода пароля "([^"]*)"$/, async ({ page }, placeholder: string) => {
  await expect(page.getByPlaceholder(placeholder)).toBeVisible({ timeout: 5000 });
});

When(
  /^пользователь ввел пароль авторизации "([^"]*)" в поле "([^"]*)"$/,
  async ({ page }, password: string, placeholder: string) => {
    await page.getByPlaceholder(placeholder).fill(password);
  }
);

// ==================== Навигация и проверки ====================

Then(/^открывается страница с текстом "([^"]*)"$/, async ({ page }, text: string) => {
  await expect(page.locator(authPage.selectors.stepInfo)).toContainText(text, { timeout: 10000 });
});

Then(/^отображается ошибка "([^"]*)"$/, async ({ page }, errorText: string) => {
  await expect(page.locator(authPage.selectors.alert)).toHaveText(errorText, { timeout: 5000 });
});

Given(/^пользователь вернулся назад на страницу$/, async ({ page }) => {
  await page.goBack();
  await page.waitForLoadState('load');
});

import { Browser, chromium, expect, Page } from '@playwright/test';
import { createBdd, DataTable } from 'playwright-bdd';
import { AuthPage } from '../page/auth.page';

let browser: Browser;
let page: Page;
const { Given, Then, When } = createBdd();
const basePage = new AuthPage();

Given(/^пользователь перешел на страницу "([^"]*)"$/, async function ({}, pageUrl: string) {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto(pageUrl);
});

Then(/^система находится в состоянии ожидания (\d+) секунд$/, async function ({}, time: number) {
  await page.waitForTimeout(time * 1000);
});

Then(/^на главной странице отображается заголовок "([^"]*)"$/, async function ({}, title: string) {
  await expect(page.getByText(title)).toBeVisible();
});

Then(/^на главной странице отображаются кнопки:$/, async function ({}, btns: DataTable) {
  for (const [index, [btn]] of btns.raw().entries()) {
    await expect(page.locator(basePage.selectors.btns).nth(index)).toHaveText(btn);
  }
});

Given(/^пользователь нажал на кнопку "([^"]*)"$/, async function ({}, name: string) {
  await page.getByRole('button', { name }).click();
});

Then(/^отображаются кнопки выбора входа на сайт:$/, async function ({}, sliders: DataTable) {
  for (const [index, [slider]] of sliders.raw().entries()) {
    await expect(page.locator(basePage.selectors.sliderLogin).nth(index)).toHaveText(slider);
  }
});

Then(
  /^на главной странице активна кнопка входа "([^"]*)"$/,
  async function ({}, activeBtn: string) {
    await expect(page.getByText(activeBtn)).toBeChecked();
  }
);

Then(/^отображается окно ввода номера телефона для авторизации$/, async function () {
  await page.locator(basePage.selectors.inputPhoneField).isVisible();
});

Given(
  /^пользователь ввел номер телефона для входа "([^"]*)"$/,
  async function ({}, number: string) {
    await page.locator(basePage.selectors.inputPhoneField).fill(number);
  }
);

Then(/^открывается страница с текстом "([^"]*)"$/, async function ({}, text: string) {
  await expect(page.locator(basePage.selectors.textInfo)).toHaveText(text);
});

Then(/^отображается поле ввода пароля "([^"]*)"$/, async function ({}, field: string) {
  await expect(page.getByPlaceholder(field)).toBeVisible();
});

When(
  /^пользователь ввел пароль авторизации "([^"]*)" в поле "([^"]*)"$/,
  async function ({}, pass: string, field: string) {
    await page.getByPlaceholder(field).fill(pass);
  }
);

Then(/^отображается ошибка "([^"]*)"$/, async function ({}, errorText: string) {
  await expect(page.getByRole('alert')).toHaveText(errorText);
});

Given(/^пользователь вернулся назад на страницу$/, async function ({}) {
  await page.goBack();
});

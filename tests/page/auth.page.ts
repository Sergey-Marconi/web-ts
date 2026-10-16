/**
<<<<<<< HEAD
 * Page Object страницы авторизации ВКонтакте
 * Содержит локаторы и методы для взаимодействия со страницей входа
 */
export class AuthPage {
  readonly selectors = {
    // Текст кнопок (внутри span)
    getButtons: 'span.vkuiButton__in',

    // Табы выбора способа входа
    getLoginSlider: (text: string) =>
      `input[name="login-view"] + span:has-text("${text}")`,
    getAllSliders: 'input[name="login-view"] + span',

    // Поля ввода
    inputPhoneOrLogin: 'input[name="phone"], input[name="login"]',
    inputPassword: 'input[type="password"]',

    // Информационные блоки
    stepInfo: 'div.vkc__StepInfo-module__body, div[data-testid="step-info"]',

    // Alert/уведомления
    alert: 'role=alert',

    // Флаги активных элементов
    activeTab: 'input[name="login-view"]:checked + span',
=======
 * Page Object страницы авторизации
 */
export class AuthPage {
  readonly selectors = {
    btns: 'span.vkuiButton__in',
    sliderLogin: 'input[name=login-view] + span',
    inputPhoneField: 'input[name=phone], input[name=login]',
    textInfo: 'div.vkc__StepInfo-module__body',
>>>>>>> origin/main
  };
}

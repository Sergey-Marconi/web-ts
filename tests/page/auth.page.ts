/**
 * Page Object страницы авторизации
 */
export class AuthPage {
  readonly selectors = {
    btns: 'span.vkuiButton__in',
    sliderLogin: 'input[name=login-view] + span',
    inputPhoneField: 'input[name=phone], input[name=login]',
    textInfo: 'div.vkc__StepInfo-module__body',
  };
}

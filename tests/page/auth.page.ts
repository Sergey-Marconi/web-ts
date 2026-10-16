/**
 * Page Object страницы авторизации ВКонтакте
 */
export class AuthPage {
  readonly selectors = {
    getButtons: 'span.vkuiButton__in',
    inputPhoneOrLogin: 'input[name="phone"], input[name="login"]',
    stepInfo: 'div.vkc__StepInfo-module__body, div[data-testid="step-info"]',
    alert: 'role=alert',
  };
}

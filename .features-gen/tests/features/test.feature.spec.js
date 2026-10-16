// Generated from: tests\features\test.feature
import { test } from "playwright-bdd";

test.describe('Страница авторизации', () => {

  test.beforeEach('Предыстория: Пользователь на главной странице', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('пользователь перешел на страницу "Главная"', null, { page }); 
  });
  
  test('Вход по номеру телефона с неверным паролем', { tag: ['@tag', '@auth-login', '@test'] }, async ({ Given, When, Then, And, page }) => { 
    await Then('на главной странице отображается заголовок "Вход ВКонтакте"', null, { page }); 
    await Then('на главной странице отображаются кнопки:', {"dataTable":{"rows":[{"cells":[{"value":"Создать страницу для бизнеса"}]},{"cells":[{"value":"Подробнее"}]},{"cells":[{"value":"Войти другим способом"}]},{"cells":[{"value":"Создать аккаунт"}]}]}}, { page }); 
    await Given('пользователь нажал на кнопку "Войти другим способом"', null, { page }); 
    await Then('на главной странице отображается заголовок "Вход ВКонтакте"', null, { page }); 
    await And('отображаются кнопки выбора входа на сайт:', {"dataTable":{"rows":[{"cells":[{"value":"Телефон"}]},{"cells":[{"value":"Почта"}]}]}}, { page }); 
    await And('на главной странице отображаются кнопки:', {"dataTable":{"rows":[{"cells":[{"value":"Создать страницу для бизнеса"}]},{"cells":[{"value":"Войти"}]},{"cells":[{"value":"Создать аккаунт"}]},{"cells":[{"value":"QR-код"}]}]}}, { page }); 
    await And('на главной странице активна кнопка входа "Телефон"', null, { page }); 
    await And('отображается окно ввода номера телефона для авторизации', null, { page }); 
    await Given('пользователь ввел номер телефона для входа "9777777777"', null, { page }); 
    await When('пользователь нажал на кнопку "Войти"', null, { page }); 
    await Then('открывается страница с текстом "Введите парольОт аккаунта VK ID с номером +7 ··· ··· ·· 77"', null, { page }); 
    await And('отображается поле ввода пароля "Введите пароль"', null, { page }); 
    await And('на главной странице отображаются кнопки:', {"dataTable":{"rows":[{"cells":[{"value":"Продолжить"}]},{"cells":[{"value":"Помощь"}]}]}}, { page }); 
    await When('пользователь ввел пароль авторизации "123abc123ABC" в поле "Введите пароль"', null, { page }); 
    await And('пользователь нажал на кнопку "Продолжить"', null, { page }); 
    await Then('отображается ошибка "Неверный пароль"', null, { page }); 
  });

  test('Возврат на главную после ошибки входа', { tag: ['@tag', '@auth-back'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('пользователь нажал на кнопку "Войти другим способом"', null, { page }); 
    await Given('пользователь ввел номер телефона для входа "9777777777"', null, { page }); 
    await When('пользователь нажал на кнопку "Войти"', null, { page }); 
    await When('пользователь ввел пароль авторизации "123abc123ABC" в поле "Введите пароль"', null, { page }); 
    await And('пользователь нажал на кнопку "Продолжить"', null, { page }); 
    await Then('отображается ошибка "Неверный пароль"', null, { page }); 
    await Given('пользователь вернулся назад на страницу', null, { page }); 
    await Then('на главной странице отображается заголовок "Вход ВКонтакте"', null, { page }); 
  });

  test('Переход на страницу создания аккаунта', { tag: ['@tag', '@auth-register'] }, async ({ Given, When, Then, And, page }) => { 
    await When('пользователь нажал на кнопку "Создать аккаунт"', null, { page }); 
    await Then('открывается страница с текстом "Создание аккаунтаВаш номер телефона будет использоваться для входа в аккаунт"', null, { page }); 
    await And('отображается окно ввода номера телефона для авторизации', null, { page }); 
    await Given('пользователь ввел номер телефона для входа "9000000000"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\test.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@tag","@auth-login","@test"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Пусть пользователь перешел на страницу \"Главная\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"Главная"}}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Тогда на главной странице отображается заголовок \"Вход ВКонтакте\"","stepMatchArguments":[{"group":{"start":44,"value":"Вход ВКонтакте"}}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Тогда на главной странице отображаются кнопки:","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Пусть пользователь нажал на кнопку \"Войти другим способом\"","stepMatchArguments":[{"group":{"start":30,"value":"Войти другим способом"}}]},{"pwStepLine":14,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Тогда на главной странице отображается заголовок \"Вход ВКонтакте\"","stepMatchArguments":[{"group":{"start":44,"value":"Вход ВКонтакте"}}]},{"pwStepLine":15,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"И отображаются кнопки выбора входа на сайт:","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"И на главной странице отображаются кнопки:","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"И на главной странице активна кнопка входа \"Телефон\"","stepMatchArguments":[{"group":{"start":42,"value":"Телефон"}}]},{"pwStepLine":18,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"И отображается окно ввода номера телефона для авторизации","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Пусть пользователь ввел номер телефона для входа \"9777777777\"","stepMatchArguments":[{"group":{"start":44,"value":"9777777777"}}]},{"pwStepLine":20,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"Когда пользователь нажал на кнопку \"Войти\"","stepMatchArguments":[{"group":{"start":30,"value":"Войти"}}]},{"pwStepLine":21,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Тогда открывается страница с текстом \"Введите парольОт аккаунта VK ID с номером +7 ··· ··· ·· 77\"","stepMatchArguments":[{"group":{"start":32,"value":"Введите парольОт аккаунта VK ID с номером +7 ··· ··· ·· 77"}}]},{"pwStepLine":22,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"И отображается поле ввода пароля \"Введите пароль\"","stepMatchArguments":[{"group":{"start":32,"value":"Введите пароль"}}]},{"pwStepLine":23,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"И на главной странице отображаются кнопки:","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"Когда пользователь ввел пароль авторизации \"123abc123ABC\" в поле \"Введите пароль\"","stepMatchArguments":[{"group":{"start":38,"value":"123abc123ABC"}},{"group":{"start":60,"value":"Введите пароль"}}]},{"pwStepLine":25,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"И пользователь нажал на кнопку \"Продолжить\"","stepMatchArguments":[{"group":{"start":30,"value":"Продолжить"}}]},{"pwStepLine":26,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Тогда отображается ошибка \"Неверный пароль\"","stepMatchArguments":[{"group":{"start":21,"value":"Неверный пароль"}}]}]},
  {"pwTestLine":29,"pickleLine":41,"tags":["@tag","@auth-back"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Пусть пользователь перешел на страницу \"Главная\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"Главная"}}]},{"pwStepLine":30,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Пусть пользователь нажал на кнопку \"Войти другим способом\"","stepMatchArguments":[{"group":{"start":30,"value":"Войти другим способом"}}]},{"pwStepLine":31,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Пусть пользователь ввел номер телефона для входа \"9777777777\"","stepMatchArguments":[{"group":{"start":44,"value":"9777777777"}}]},{"pwStepLine":32,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"Когда пользователь нажал на кнопку \"Войти\"","stepMatchArguments":[{"group":{"start":30,"value":"Войти"}}]},{"pwStepLine":33,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"Когда пользователь ввел пароль авторизации \"123abc123ABC\" в поле \"Введите пароль\"","stepMatchArguments":[{"group":{"start":38,"value":"123abc123ABC"}},{"group":{"start":60,"value":"Введите пароль"}}]},{"pwStepLine":34,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"И пользователь нажал на кнопку \"Продолжить\"","stepMatchArguments":[{"group":{"start":30,"value":"Продолжить"}}]},{"pwStepLine":35,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Тогда отображается ошибка \"Неверный пароль\"","stepMatchArguments":[{"group":{"start":21,"value":"Неверный пароль"}}]},{"pwStepLine":36,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Пусть пользователь вернулся назад на страницу","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Тогда на главной странице отображается заголовок \"Вход ВКонтакте\"","stepMatchArguments":[{"group":{"start":44,"value":"Вход ВКонтакте"}}]}]},
  {"pwTestLine":40,"pickleLine":52,"tags":["@tag","@auth-register"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Пусть пользователь перешел на страницу \"Главная\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"Главная"}}]},{"pwStepLine":41,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"Когда пользователь нажал на кнопку \"Создать аккаунт\"","stepMatchArguments":[{"group":{"start":30,"value":"Создать аккаунт"}}]},{"pwStepLine":42,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Тогда открывается страница с текстом \"Создание аккаунтаВаш номер телефона будет использоваться для входа в аккаунт\"","stepMatchArguments":[{"group":{"start":32,"value":"Создание аккаунтаВаш номер телефона будет использоваться для входа в аккаунт"}}]},{"pwStepLine":43,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"И отображается окно ввода номера телефона для авторизации","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":56,"keywordType":"Context","textWithKeyword":"Пусть пользователь ввел номер телефона для входа \"9000000000\"","stepMatchArguments":[{"group":{"start":44,"value":"9000000000"}}]}]},
]; // bdd-data-end
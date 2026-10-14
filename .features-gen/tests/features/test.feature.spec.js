// Generated from: tests\features\test.feature
import { test } from "playwright-bdd";

test.describe('Страница авторизации', () => {

  test('Тест_1', { tag: ['@tag'] }, async ({ Given, When, Then, And }) => { 
    await Given('пользователь перешел на страницу "https://vk.ru"'); 
    await Then('система находится в состоянии ожидания 2 секунд'); 
    await Then('на главной странице отображается заголовок "Вход ВКонтакте"'); 
    await Then('на главной странице отображаются кнопки:', {"dataTable":{"rows":[{"cells":[{"value":"Создать страницу для бизнеса"}]},{"cells":[{"value":"Подробнее"}]},{"cells":[{"value":"Войти другим способом"}]},{"cells":[{"value":"Создать аккаунт"}]}]}}); 
    await Given('пользователь нажал на кнопку "Войти другим способом"'); 
    await Then('на главной странице отображается заголовок "Вход ВКонтакте"'); 
    await And('отображаются кнопки выбора входа на сайт:', {"dataTable":{"rows":[{"cells":[{"value":"Телефон"}]},{"cells":[{"value":"Почта"}]}]}}); 
    await And('на главной странице отображаются кнопки:', {"dataTable":{"rows":[{"cells":[{"value":"Создать страницу для бизнеса"}]},{"cells":[{"value":"Войти"}]},{"cells":[{"value":"Создать аккаунт"}]},{"cells":[{"value":"QR-код"}]}]}}); 
    await And('на главной странице активна кнопка входа "Телефон"'); 
    await And('отображается окно ввода номера телефона для авторизации'); 
    await Given('пользователь ввел номер телефона для входа "9777777777"'); 
    await When('пользователь нажал на кнопку "Войти"'); 
    await Then('открывается страница с текстом "Введите парольОт аккаунта VK ID с номером +7 ··· ··· ·· 77"'); 
    await And('отображается поле ввода пароля "Введите пароль"'); 
    await And('на главной странице отображаются кнопки:', {"dataTable":{"rows":[{"cells":[{"value":"Продолжить"}]},{"cells":[{"value":"Помощь"}]}]}}); 
    await When('пользователь ввел пароль авторизации "123abc123ABC" в поле "Введите пароль"'); 
    await And('пользователь нажал на кнопку "Продолжить"'); 
    await Then('отображается ошибка "Неверный пароль"'); 
    await Given('пользователь вернулся назад на страницу'); 
    await Then('на главной странице отображается заголовок "Вход ВКонтакте"'); 
    await When('пользователь нажал на кнопку "Создать аккаунт"'); 
    await Then('открывается страница с текстом "Создание аккаунтаВаш номер телефона будет использоваться для входа в аккаунт"'); 
    await And('отображается окно ввода номера телефона для авторизации'); 
    await Given('пользователь ввел номер телефона для входа "9000000000"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\test.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@tag"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Пусть пользователь перешел на страницу \"https://vk.ru\"","stepMatchArguments":[{"group":{"start":34,"value":"https://vk.ru"}}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Тогда система находится в состоянии ожидания 2 секунд","stepMatchArguments":[{"group":{"start":39,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Тогда на главной странице отображается заголовок \"Вход ВКонтакте\"","stepMatchArguments":[{"group":{"start":44,"value":"Вход ВКонтакте"}}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Тогда на главной странице отображаются кнопки:","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Пусть пользователь нажал на кнопку \"Войти другим способом\"","stepMatchArguments":[{"group":{"start":30,"value":"Войти другим способом"}}]},{"pwStepLine":12,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Тогда на главной странице отображается заголовок \"Вход ВКонтакте\"","stepMatchArguments":[{"group":{"start":44,"value":"Вход ВКонтакте"}}]},{"pwStepLine":13,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"И отображаются кнопки выбора входа на сайт:","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"И на главной странице отображаются кнопки:","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"И на главной странице активна кнопка входа \"Телефон\"","stepMatchArguments":[{"group":{"start":42,"value":"Телефон"}}]},{"pwStepLine":16,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"И отображается окно ввода номера телефона для авторизации","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Пусть пользователь ввел номер телефона для входа \"9777777777\"","stepMatchArguments":[{"group":{"start":44,"value":"9777777777"}}]},{"pwStepLine":18,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"Когда пользователь нажал на кнопку \"Войти\"","stepMatchArguments":[{"group":{"start":30,"value":"Войти"}}]},{"pwStepLine":19,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Тогда открывается страница с текстом \"Введите парольОт аккаунта VK ID с номером +7 ··· ··· ·· 77\"","stepMatchArguments":[{"group":{"start":32,"value":"Введите парольОт аккаунта VK ID с номером +7 ··· ··· ·· 77"}}]},{"pwStepLine":20,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"И отображается поле ввода пароля \"Введите пароль\"","stepMatchArguments":[{"group":{"start":32,"value":"Введите пароль"}}]},{"pwStepLine":21,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"И на главной странице отображаются кнопки:","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"Когда пользователь ввел пароль авторизации \"123abc123ABC\" в поле \"Введите пароль\"","stepMatchArguments":[{"group":{"start":38,"value":"123abc123ABC"}},{"group":{"start":60,"value":"Введите пароль"}}]},{"pwStepLine":23,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"И пользователь нажал на кнопку \"Продолжить\"","stepMatchArguments":[{"group":{"start":30,"value":"Продолжить"}}]},{"pwStepLine":24,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Тогда отображается ошибка \"Неверный пароль\"","stepMatchArguments":[{"group":{"start":21,"value":"Неверный пароль"}}]},{"pwStepLine":25,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Пусть пользователь вернулся назад на страницу","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Тогда на главной странице отображается заголовок \"Вход ВКонтакте\"","stepMatchArguments":[{"group":{"start":44,"value":"Вход ВКонтакте"}}]},{"pwStepLine":27,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"Когда пользователь нажал на кнопку \"Создать аккаунт\"","stepMatchArguments":[{"group":{"start":30,"value":"Создать аккаунт"}}]},{"pwStepLine":28,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Тогда открывается страница с текстом \"Создание аккаунтаВаш номер телефона будет использоваться для входа в аккаунт\"","stepMatchArguments":[{"group":{"start":32,"value":"Создание аккаунтаВаш номер телефона будет использоваться для входа в аккаунт"}}]},{"pwStepLine":29,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"И отображается окно ввода номера телефона для авторизации","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Пусть пользователь ввел номер телефона для входа \"9000000000\"","stepMatchArguments":[{"group":{"start":44,"value":"9000000000"}}]}]},
]; // bdd-data-end
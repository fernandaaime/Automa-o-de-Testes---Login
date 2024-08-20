var validacao = require ('assert')

Feature('login');

Scenario('test something',  async ({ I }) => {

    I.amOnPage('/')
    I.click('Login')
    I.fillField('.form-control', 'aime_fe@hotmail.com')
    I.fillField('#password', '123456')

    var title = await I.grabTitle()
    validacao.equal(title, 'QAZANDO Shop E-Commerce')

    I.see('Login')
});



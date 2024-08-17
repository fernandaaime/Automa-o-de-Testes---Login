Feature('login');

Scenario('test something',  ({ I }) => {

    I.amOnPage('/')
    I.click('Login')
    I.fillField('.form-control', 'aime_fe@hotmail.com')
    I.fillField('#password', '123456')
    I.dontSee('.invalid_input')
    I.wait(10)
 
});

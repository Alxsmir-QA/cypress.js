describe('Тестирование формы логина и пароля', function () {
    it('Проверка правильного логина и пароля:', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click()
         cy.get('#messageHeader').contains('Авторизация прошла успешно')
         cy.get('#messageHeader') .should('be.visible')
     })
 })
 
 describe('Форма восстаноления пароля', function () {
    it('Кнопка забыли пароль:', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click()
         cy.get('#mailForgot').type('fdsfds@mail.ru')
         cy.get('#restoreEmailButton').click()
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
         cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
 })

 describe('Тестирование формы логина и пароля', function () {
    it('Проверка правильного логина и НЕ правильного пароля:', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('111111111111111111111111')
         cy.get('#loginButton').click()
         cy.get('#messageHeader').contains('Такого логина или пароля нет')
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible')
     })
 })

 describe('Тестирование формы логина и пароля', function () {
    it('Проверка НЕ правильного логина и правильного пароля:', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('asd@mail.ru')
         cy.get('#pass').type(' iLoveqastudio1')
         cy.get('#loginButton').click()
         cy.get('#messageHeader').contains('Такого логина или пароля нет')
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible')
         })
 })

 describe('Тестирование формы логина и пароля', function () {
    it('Проверка логина Без @ и правильного пароля:', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru')
         cy.get('#pass').type(' iLoveqastudio1')
         cy.get('#loginButton').click()
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
         })
 })

 describe('Тестирование формы логина и пароля', function () {
    it('Приведение логина к строчным буквам', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@dolnikov.ru')
         cy.get('#pass').type(' iLoveqastudio1')
         cy.get('#loginButton').click()
         cy.get('#messageHeader').contains('Авторизация прошла успешно')
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible')
         })
 })


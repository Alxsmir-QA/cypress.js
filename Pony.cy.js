describe('Тестирование сайта на оформление заказа', function () {
    it('дойти до поля офрмить заказ', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
         cy.get('[data-product-id="338932952"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').click();
         cy.wait(1000);
         cy.get('.add-cart-counter__btn-label').click();
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа').should('be.visible');
     })
 })

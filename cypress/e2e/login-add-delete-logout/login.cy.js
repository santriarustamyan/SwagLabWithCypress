const indexProduct = Math.floor(Math.random() * 5 + 1);
const productPath = '.inventory_item:nth-child('+ indexProduct +') button'
const usernamePath = "[id = 'user-name']";
const passwordPath = "[id = 'password']";
const loginBtnPath = "[id = 'login-button']";
const shoppingBagIconPath = '[class="shopping_cart_badge"]';
const shoppingCartBadge = ".shopping_cart_badge";
const manuBtnPath = '[id="react-burger-menu-btn"]';
const logOutBthPath = '[id="logout_sidebar_link"]';
const remove = "Remove";
const username = "standard_user";
const password = "secret_sauce";

describe('login add remove logout', () => {
    beforeEach("Navigate to SwagLabs Page", () => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('login add remove logout', function () {

        cy.get(usernamePath).type(username)
        cy.get(passwordPath).type(password)
        cy.get(loginBtnPath).click()

        cy.get(productPath).click()

        cy.get(shoppingBagIconPath).click()

        cy.get(shoppingCartBadge).should("be.visible")

        cy.contains(remove).click()

        cy.get(shoppingCartBadge).should('not.exist')

        cy.get(manuBtnPath).click()
        cy.get(logOutBthPath).click()

    })
})
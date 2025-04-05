const BTN_AUTOMOBILE = '#nav_automobile'

Cypress.Commands.add('acessarPortalTricentis', () => {
    cy.visit('/')
})
Cypress.Commands.add('clickBtnAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})
Cypress.Commands.add('validarAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).should('be.visible')
})
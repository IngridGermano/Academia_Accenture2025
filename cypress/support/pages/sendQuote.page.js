Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Ignora qualquer erro de JavaScript não tratado
})

Cypress.Commands.add('preencherSendQuote', () => {
    const email = Cypress.env('email')
    const phone = Cypress.env('phone')
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    const confirmPassword = Cypress.env('confirmPassword')

    const INPUT_PASSWORD = '#password'
    const INPUT_EMAIL = '#email'
    const INPUT_PHONE = '#phone'
    const INPUT_USERNAME = '#username'
    const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
    const INPUT_COMMENTS = '#Comments'
    const BTN_SEND = '#sendemail'
    const SUCCESS_MESSAGE = '#confirm'
    const SUCCESS_MESSAGE_TEXT = 'Sending e-mail success!'

    cy.get(INPUT_EMAIL).type(email)
    cy.get(INPUT_PHONE).type(phone)
    cy.get(INPUT_USERNAME).type(username)
    cy.get(INPUT_PASSWORD).type(password)
    cy.get(INPUT_CONFIRM_PASSWORD).type(confirmPassword).should('have.value', password)
    cy.get(INPUT_COMMENTS).type('Teste de automação do Portal Tricentis Automobile com Cypress realizado com sucesso!')
    cy.get(BTN_SEND).should('be.visible')
    cy.get(BTN_SEND).click()
})

Cypress.Commands.add('validacaoSucesso', () => {
    cy.get(SUCCESS_MESSAGE).should('be.visible')
    cy.contains(SUCCESS_MESSAGE_TEXT).should('be.visible')
    cy.get(SUCCESS_MESSAGE).click()
})
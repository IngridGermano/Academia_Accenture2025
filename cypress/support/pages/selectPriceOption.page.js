const radio_price = ['#selectsilver','#selectgold','#selectplatinum','#selectultimate']
const BTN_NEXT = '#nextsendquote'
const SECTION_PRICE_PLANS = '#selectpriceoption'
const SECTION_PRICE_OPTIONS = '#selectpriceoption'
const SECTION_PRICE_LOADING = '#xLoaderPrice'

Cypress.Commands.add('selecionarSelectPriceOption', () => {
    cy.get(SECTION_PRICE_PLANS).should('be.visible')
    cy.get(Cypress._.sample(radio_price)).check({ force: true })
    cy.get(BTN_NEXT, { timeout: 20000 }).should('be.visible')
    cy.get(BTN_NEXT).click()
})

// Cenário Negativo 01 - Clicar na página "Select Price Option" sem preencher os campos obrigatórios
Cypress.Commands.add('clicarPaginaSelectPriceOption', () => {
    cy.get(SECTION_PRICE_OPTIONS).should('be.visible').click()
})
Cypress.Commands.add('verificarMensagemErro', () => {
    cy.get(SECTION_PRICE_LOADING).should('be.visible').contains('Please, complete the first three steps to see the price table.')
})



//const BTN_DONWLOAD = '#downloadquote'
//  cy.get(BTN_DONWLOAD).click()
//  cy.get(BTN_NEXT).should('be.visible')
// FALAR NO VÍDEO QUE O BOTÃO NEXT NÃO FUNCIONA SE FIZER O DOWNLOAD DO PDF;
// MESMO QUE EU COLOQUE UM CY.WAIT DE 12 SEGUNDOS, O BOTÃO NÃO FICA VISÍVEL NEM CLICA

//timeout significa que vai esperar no máximo o tempo que eu coloquei, no caso 5 seg,
//para o botão next ficar visível em tela
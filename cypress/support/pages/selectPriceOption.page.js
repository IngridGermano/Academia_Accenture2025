const radio_price = ['#selectsilver','#selectgold','#selectplatinum','#selectultimate']
const BTN_NEXT = '#nextsendquote'

Cypress.Commands.add('selecionarSelectPriceOption', () => {
    cy.get(Cypress._.sample(radio_price)).check({ force: true })
    cy.get(BTN_NEXT, { timeout: 5000 }).should('be.visible')
    cy.get(BTN_NEXT).click()
})


//const BTN_DONWLOAD = '#downloadquote'
//  cy.get(BTN_DONWLOAD).click()
//  cy.get(BTN_NEXT).should('be.visible')
// FALAR NO VÍDEO QUE O BOTÃO NEXT NÃO FUNCIONA SE FIZER O DOWNLOAD DO PDF;
// MESMO QUE EU COLOQUE UM CY.WAIT DE 12 SEGUNDOS, O BOTÃO NÃO FICA VISÍVEL NEM CLICA

//timeout significa que vai esperar no máximo o tempo que eu coloquei, no caso 5 seg,
//para o botão next ficar visível em tela
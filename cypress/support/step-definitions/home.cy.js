import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'

Given ('que acesso o portal Tricentis', () => {
    cy.visit('/')
})
When ('clico no botão Automobile', () => {
    cy.clickBtnAutomobile()
})
Then ('valido o acesso a página Automobile', () => {
    cy.validarAutomobile()
})
And ('preencho os campos em Enter Vehicle Data', () => {
    cy.preencherEnterVehicleData()
})
And ('preencho os campos em Enter Insurant Data', () => {
    cy.preencherEnterInsurantData()
})
And ('preencho os campos em Enter Product Data', () => {
    cy.preencherEnterProductData()
})
And ('seleciono o plano desejado em Select Price Option', () => {
    cy.selecionarSelectPriceOption()
})
And ('preencho os campos em Send Quote', () => {
    cy.preencherSendQuote()
})
import {Given, When, And, Then, Before, After} from 'cypress-cucumber-preprocessor/steps'

Given ('que acesso o portal Tricentis', () => {
  cy.visit('/')
})
And ('clico no botão Automobile', () => {
  cy.clickBtnAutomobile()
})
And ('valido o acesso a página Automobile', () => {
  cy.validarAutomobile()
})
When("clico na página {string} sem preencher os campos obrigatórios nas etapas anteriores", () => {
  cy.clicarPaginaSelectPriceOption()
})
Then("o sistema deve exibir uma mensagem informando que os campos anteriores são obrigatórios para poder exibir a tabela de preços", () => {
  cy.verificarMensagemErro()
})
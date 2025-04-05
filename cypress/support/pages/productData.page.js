import moment from 'moment'

// Gerar dados aleatórios usando o faker
const start_date = moment().add(31, 'days').format('MM/DD/YYYY')
const INPUT_START_DATE = '#startdate'
const INPUT_INSURANCE_SUM = '#insurancesum'
const INPUT_MERIT_RATING = '#meritrating'
const INPUT_DAMAGE_INSURANCE = '#damageinsurance'
const optional_products = ['#EuroProtection', '#LegalDefenseInsurance']
const INPUT_COURTESY_CAR = '#courtesycar'
const BTN_NEXT = '#nextselectpriceoption'

Cypress.Commands.add('preencherEnterProductData', () => {
    cy.get(INPUT_START_DATE).type(start_date) // Preenche o campo de data de início com a data atual
    cy.get(INPUT_INSURANCE_SUM).select('3.000.000,00')
    cy.get(INPUT_MERIT_RATING).select('Bonus 1')
    cy.get(INPUT_DAMAGE_INSURANCE).select('Full Coverage')
    cy.get(Cypress._.sample(optional_products)).check({ force: true }) // Seleciona um produto opcional aleatório
    cy.get(INPUT_COURTESY_CAR).select('No')
    cy.get(BTN_NEXT).click()
})
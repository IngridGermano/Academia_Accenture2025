import { faker } from '@faker-js/faker';
import moment from 'moment';

const INPUT_MAKE = '#make';
const INPUT_ENGINEPERFORM = '#engineperformance';
const INPUT_DATE_MANUFACTURE = '#dateofmanufacture';
const INPUT_SEATS = '#numberofseats';
const INPUT_FUEL = '#fuel';
const INPUT_LISTPRICE = '#listprice';
const INPUT_LICENSE = '#licenseplatenumber';
const INPUT_ANNUAL_MILEAGE = '#annualmileage';
const BTN_NEXT = '#nextenterinsurantdata';
const date_manufacture = moment().year(Math.floor(Math.random() * (2022 - 2010 + 1)) + 2010)
  .month(Math.floor(Math.random() * 12))
  .date(Math.floor(Math.random() * 28) + 1)
  .format('MM/DD/YYYY')
const engine_performance = Math.floor(Math.random() * (1000 - 50 + 1)) + 50
const list_price = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000
const annual_mileage = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000
const license_plate = faker.vehicle.vrm()
const selectRandomOption = (selector) => {
  cy.get(selector).then($select => {
    const options = $select.find('option')
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomOption = options[randomIndex].value
    cy.get(selector).select(randomOption)
  })
}

Cypress.Commands.add('preencherEnterVehicleData', () => {
  selectRandomOption(INPUT_MAKE)
  cy.get(INPUT_ENGINEPERFORM).clear().type(engine_performance)
  cy.get(INPUT_DATE_MANUFACTURE).type(date_manufacture)
  selectRandomOption(INPUT_SEATS)
  selectRandomOption(INPUT_FUEL)
  cy.get(INPUT_LISTPRICE).clear().type(list_price)
  cy.get(INPUT_LICENSE).type(license_plate)
  cy.get(INPUT_ANNUAL_MILEAGE).clear().type(annual_mileage)
  cy.get(BTN_NEXT).click()
})
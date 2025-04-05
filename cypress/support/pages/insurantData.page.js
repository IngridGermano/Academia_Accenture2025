import {faker} from "@faker-js/faker"
import moment from 'moment'

const prim_nome = faker.person.firstName()
const ult_nome = faker.person.lastName()
const birth_date = moment(faker.date.birthdate({min: 18, max: 70, mode: 'age'})).format('MM/DD/YYYY')
const gender = faker.person.sexType()
const streetAddress = faker.location.streetAddress()
const country = faker.location.country()
const zip_code = faker.location.zipCode('#######').replace('-', '')
const city = faker.location.city()
const hobbies = ['#speeding', '#bungeejumping', '#cliffdiving', '#skydiving', '#other']
const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_BIRTH_DATE = '#birthdate'
const BTN_GNR_MALE = '#gendermale'
const BTN_GNR_FEMALE = '#genderfemale'
const INPUT_ADRESS = '#streetaddress'
const INPUT_COUNTRY = '#country'
const INPUT_ZIP = '#zipcode'
const INPUT_CITY = '#city'
const INPUT_OCCUPATION = '#occupation'
const INPUT_WEBSITE = '#website'
const INPUT_PICTURE = '#picturecontainer'
const BTN_NEXT = '#nextenterproductdata'

Cypress.Commands.add('preencherEnterInsurantData', () => {
    cy.get(INPUT_FIRST_NAME).type(prim_nome)
    cy.get(INPUT_LAST_NAME).type(ult_nome)
    cy.get(INPUT_BIRTH_DATE).type(birth_date)
    cy.log(gender)
     if (gender === 'male') {
        cy.get(BTN_GNR_MALE).click({force: true})
    } else if (gender === 'female') {
        cy.get(BTN_GNR_FEMALE).click({force: true})
    }
    cy.get(INPUT_ADRESS).type(streetAddress)
    cy.get(INPUT_COUNTRY).select(country)
    cy.get(INPUT_ZIP).type(zip_code)
    cy.get(INPUT_CITY).type(city)
    cy.get(INPUT_OCCUPATION).select('Employee')
    cy.get(Cypress._.sample(hobbies)).check({ force: true })
    cy.get(INPUT_WEBSITE).type(faker.internet.url())
    cy.get(INPUT_PICTURE).selectFile('avatar.jpg', { force: true })
    cy.get(BTN_NEXT).click()
})
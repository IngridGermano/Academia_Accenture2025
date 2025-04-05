Cypress.Commands.add('requisicaoSendQuote', () => {
    cy.request({
        method: 'POST',
        url: 'https://sampleapp.tricentis.com/101/',
        headers: {
            'Content-Type': 'application/json',
        },
        body:{
            query: `query Quotes {
                quotes {
                    email
                    phone
                    username
                    password
                    confirmPassword
                }
            }`
                       
        }
    }).then(response => {
        Cypress.env('responseData', response)
        cy.log(Cypress.env('responseData'))
    })
})

Cypress.Commands.add('validarSendQuote', () => {
    const response = Cypress.env('responseData')
    const {status, body} = response
    expect(status).to.equal(200)
    let corpo = JSON.stringify(body)
    expect(corpo).to.include('quotes')
    cy.log('Requisição Send Quote validada com sucesso')
    cy.log('Status: ' + status)
    cy.log('Corpo: ' + corpo)
})
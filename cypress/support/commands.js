// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', ()=> {
     const base_url = Cypress.config('baseUrl')
		cy.visit('/');
        // console.log(base_url)
        cy.get('#email').type(Cypress.config('user_name'))
        cy.get('#password').type(Cypress.config('password'),{log:false})
        cy.get('.ant-btn').click()
        cy.get('body',{timeout:2000}).should('be.visible')
})

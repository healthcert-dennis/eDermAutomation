/// <reference types="cypress" />
// Author: Dennis Tinio

describe('Go to Google website', () => {
    beforeEach(() => {
        cy.visit('https://google.com/', { timeout: 30000 })
    })

    it('Search', () => {
        cy.get('[title="Search"]')
        .type('test search').should('have.value', 'test search')
        .type('{enter}')
        
    })
})

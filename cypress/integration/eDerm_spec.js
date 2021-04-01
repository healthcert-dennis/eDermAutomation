// Author: Dennis Tinio

describe('Go to eDerm website', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://sonic.ederm.com.au/', { timeout: 5000 })
    })

    it('Enter credentials', () => {
        cy.get('[id="name"]')
        .type('apidoc').should('have.value', 'apidoc')
        
        cy.get('[id="password"]').type('629188')
        cy.get('[type="submit"]').click({ force: true })
        
        //Dashboard should be displayed
        cy.get('[src="/images/header-dashboard.png"]').should('be.visible')
    })
})

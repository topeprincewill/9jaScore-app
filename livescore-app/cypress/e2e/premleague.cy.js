// cypress/integration/profile_login.spec.js

describe('Premier League Page Test', () => {
    it('Clicks on Premier League tab, and goes to Premier League Page', () => {
      // Visit the homepage of your app
      cy.visit('http://localhost:3000')
  
      // Click on the Premier League tab
      //cy.get('#PremierLeague').click()
      cy.get('a[href="/PremierLeague"]').click()
  
      // Verify that the URL contains /login, indicating the user is on the login page
      cy.url().should('include', '/PremierLeague')
    })
  })
  
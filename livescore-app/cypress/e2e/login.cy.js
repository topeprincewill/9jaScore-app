// cypress/integration/profile_login.spec.js

describe('Profile Login Test', () => {
    it('Clicks on profile icon, selects Login from dropdown, and goes to login page', () => {
      // Visit the homepage of your app
      cy.visit('http://localhost:3000')
  
      // Click on the profile icon
      cy.get('#LoginButton').click()
  
      // Wait for the dropdown menu to appear and click on Login
      cy.get('#menu-appbar').should('be.visible')
      cy.contains('Login').click()
  
      // Verify that the URL contains /login, indicating the user is on the login page
      cy.url().should('include', '/login')
    })
  })
  
// cypress/integration/my_first_test.cy.js

describe('My First Test', () => {
    it('Checks if 9jaScore is visible on landing', () => {
      // Visit the homepage of your app on localhost
      cy.visit('http://localhost:3000') // Update the port if needed
  
      // Assert that "9jaScore" is visible
      cy.contains('9jaScore').should('be.visible')
    })
  })
  
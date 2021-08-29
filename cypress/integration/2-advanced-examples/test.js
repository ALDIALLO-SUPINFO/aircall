describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://phone.aircall.io/')
  
      cy.get('[data-test=signin-email-input] > .TextField__TextFieldContainer-sc-1ythfz5-2 > .TextFieldInput__TextFieldInputComponent-sc-1y2grzu-0')
      .type('qa+test@aircall.io')
      .should('have.value', 'qa+test@aircall.io');

    // Fill the password
    cy.get('[data-test=signin-password-input] > .TextField__TextFieldContainer-sc-1ythfz5-2 > .TextFieldInput__TextFieldInputComponent-sc-1y2grzu-0')
      .type('f77398b7')
      .should('have.value', 'f77398b7');

    // Locate and submit the form
    cy.get('[data-test=signin-button]').click() 
   
    })
  })
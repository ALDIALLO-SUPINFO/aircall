describe('My First Test', () => {
	let LoginData;
	beforeEach(() => {
	cy.fixture('example','example').then((data) => {
	LoginData = data;
	return LoginData;
	});
	});
	it('Visits aircall', () => {
	cy.visit('https://phone.aircall.io/');
	cy.url()
	.should('include', 'login')
	cy.get('[data-test=signin-email-input]').type(LoginData.email).should('be.visible');
	// Fill the password
	cy.get('[data-test=signin-password-input]')
	.type(LoginData.passWord).should('be.visible');
	// Locate and submit the form
	cy.get('[data-test=signin-button]', ).click();
	cy.wait(7000);
	cy.get('[data-test=continue-button]').click()
	cy.get('[data-test=next-button]').click();
	cy.get('[data-test=next-button]').click();
	cy.get('[data-test=next-button]').click();
	cy.get('[data-test=next-button]').click();
	cy.get('[data-test=keyboard-input-text]').type(LoginData.number);
	cy.get('.Call__SvgCall-sc-19179tn-0').click();
	cy.url().should('include', 'ringing')
	cy.location('pathname', {timeout: 60000}).should('include', '/incall');
    cy. wait(500);
    cy.get('.AddUser__SvgAddUser-sc-15bym59-0').click().should('be.visible');
    cy.wait(7000);
    cy.get('[data-test=keyboard-input-text]').type(LoginData.numberName);
    cy.wait(4000)
    cy.get('[data-test=avatar]').click()
    cy.url().should('include', 'keyboard')
	cy.get('[data-test=sheet-close] > .Icon__IconContainer-sc-1nxqijo-0 > .Close__SvgClose-hm8qnr-0').click();
	cy.url().should('include', 'incall');
  
	
	})
	})
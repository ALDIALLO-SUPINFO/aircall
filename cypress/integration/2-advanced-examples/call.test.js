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
	cy.get('[data-test=signin-email-input]')
	.type(LoginData.email).should('be.visible');
	// Fill the password
	cy.get('[data-test=signin-password-input] > .TextField__TextFieldContainer-sc-1ythfz5-2 > .TextFieldInput__TextFieldInputComponent-sc-1y2grzu-0')
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
	cy.location('pathname', {timeout: 60000})
	.should('include', '/incall');
	cy.wait(7000)
	cy.get('.HangUp__SvgHangUp-sc-1rxq485-0').click();
	cy.location('pathname', {timeout: 6000})
	.should('include', '/call-ended');
	cy.get('.Keypad__SvgKeypad-sc-1rjgtwc-0').click();
	cy.wait(500);
	cy.location('pathname')
	.should('include', '/keyboard');
	
	

	})
	})
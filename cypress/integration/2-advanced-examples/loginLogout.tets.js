describe('My First Test', () => {

	let LoginData;
	beforeEach(() => {
		cy.fixture('example').then((data) => {
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
		cy.get('[data-test=signin-password-input]').type(LoginData.passWord).should('be.visible');

		// Locate and submit the form
		cy.get('[data-test=signin-button]', ).click();
		cy.wait(7000);


		cy.get('[data-test=continue-button]').click()

		cy.get('[data-test=next-button]').click();


		cy.get('[data-test=next-button]').click();

		cy.get('[data-test=next-button]').click();

		cy.get('[data-test=next-button]').click();

		cy.get('[data-test=tab-bar-settings]').should('contain', 'QT').click();
		cy.get('[data-test=settings-menu-logout] > [data-test=item-button]').click();
		cy.url().should('include', 'login')

	})
})
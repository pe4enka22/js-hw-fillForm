describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')

    cy.log('Open Dark Theme');
    cy.get('[alt="Material Dark Theme"]').click();

    cy.log('Open Layouts page');
    cy.get('[title="Forms"]').click();
    cy.get('[href="/pages/forms/layouts"]').click();

    cy.log('Inline form locators');
    cy.get('[placeholder="Jane Doe"]');
    cy.get('form.form-inline [placeholder="Email"]');
    cy.get('form.form-inline .custom-checkbox');
    cy.get('form.form-inline button');

    cy.log('Using the Grid locators');
    cy.get('#inputEmail1');
    cy.get('#inputPassword2');
    cy.get('form [type="radio"]').eq(0);
    cy.get('form [type="radio"]').eq(1);
    cy.get('form [type="radio"]').eq(2);
    cy.get('nb-card-body .offset-sm-3.col-sm-9>button.status-primary');

    cy.log('Form without labels locators');
    cy.get('[placeholder="Recipients"]');
    cy.get('[placeholder="Subject"]');
    cy.get('[placeholder="Message"]');
    cy.get('nb-card-body .form-group+button.status-success');

    cy.log('Horizontal form locators');
    cy.get('#inputEmail3');
    cy.get('#inputPassword3');
    cy.get('form.form-horizontal .checkbox');
    cy.get('form.form-horizontal button');

    cy.log('Basic form locators');
    cy.get('#exampleInputEmail1');
    cy.get('#exampleInputPassword1');
    cy.get('button[status="danger"]');
    cy.get('div .custom-checkbox').eq(1);


    cy.log('Block form locators');
    cy.get('#inputFirstName');
    cy.get('#inputLastName');
    cy.get('#inputEmail');
    cy.get('#inputWebsite');
    cy.get('nb-card-body > button');

  })
})
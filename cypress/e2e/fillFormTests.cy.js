let formData = [{
    //inlineform
    fieldSelector: '[placeholder="Jane Doe"]',
    inputValue: "Inline Name",
    getValue: "Inline Name"
},{
    fieldSelector: 'form.form-inline [placeholder="Email"]',
    inputValue: "inline@email.test",
    getValue: "inline@email.test"
}, {
    //using the grid
    fieldSelector: '#inputEmail1',
    inputValue: "grid@email.test",
    getValue: "grid@email.test"
},{
    fieldSelector: '#inputPassword2',
    inputValue: "gridPassWord1",
    getValue: "gridPassWord1"
},{
    //Form without labels
    fieldSelector: '[placeholder="Recipients"]',
    inputValue: "LabelRecipient",
    getValue: "LabelRecipient"
},{
    fieldSelector: '[placeholder="Subject"]',
    inputValue: "Label Subject",
    getValue: "Label Subject"
}, {
    fieldSelector: '[placeholder="Message"]',
    inputValue: "Label Message",
    getValue: "Label Message"
},{
    //Horizontal form fill
    fieldSelector: '#inputEmail3',
    inputValue: "horizontal@email.test",
    getValue: "horizontal@email.test"
},{
    fieldSelector: '#inputPassword3',
    inputValue: "horizontalPassWord1",
    getValue: "horizontalPassWord1"
},{
    //Basic form fill
    fieldSelector: '#exampleInputEmail1',
    inputValue: "basic@email.test",
    getValue: "basic@email.test"

},{
    fieldSelector: '#exampleInputPassword1',
    inputValue: "inputPassWord1",
    getValue: "inputPassWord1"
},{
    //Block form
    fieldSelector: '#inputFirstName',
    inputValue: "Block FirstName",
    getValue: "Block FirstName"
},{
    fieldSelector: '#inputLastName',
    inputValue: "Block LastName",
    getValue: "Block LastName"
},{
    fieldSelector: '#inputEmail',
    inputValue: "block@email.test",
    getValue: "block@email.test"
},{
    fieldSelector: '#inputWebsite',
    inputValue: "block.com",
    getValue: "block.com"
}]

     formData.forEach(formData => {
         it(`Fill in the ${formData.fieldSelector} field`, () => {

             cy.log('Open layout page');
             cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
             cy.log('Open Dark Theme');
             cy.get('[alt="Material Dark Theme"]').click();
             cy.log('Open Layouts page');
             cy.get('[title="Forms"]').click();
             cy.get('[href="/pages/forms/layouts"]').click();

             cy.get(formData.fieldSelector).type(`${formData.inputValue}`);
             cy.get(formData.fieldSelector).should('contain', formData.getValue);

         })
     })
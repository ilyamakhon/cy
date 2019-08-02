// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.get(".auth-container form").within(() => {
    cy.get("input[type=text]").type(username);
    cy.get("input[type=password]").type(password);
    cy.root().submit();
  });
});

Cypress.Commands.add("logout", (username) => {
  cy.get(".b-top-profile__list").within(() => {
    cy.xpath("//a[@class='b-top-profile__preview js-toggle-bar']")
      .click()
      .get(".b-top-profile__header")
      .within(() => {
        cy.get("a").should("contain", username);
        cy.contains("Выйти").click();
      });
  });
});

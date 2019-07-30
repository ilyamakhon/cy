describe("login to onliner", () => {
  it("sign in form test", () => {
    const username = "ilyamakhon";
    const password = "3231295";

    cy.viewport(1500, 768);

    cy.visit("https://onliner.by")
      .get("div")
      .contains("Вход")
      .click();

    cy.get(".auth-container .auth-container_max-width_sssm form").within(() => {
      cy.get("input[type=text]", () => {
        cy.should("have.attr", "placeholder").and("include", "e-mail");
      }).type(username);
      cy.get("input[type=password]", () => {
        cy.should("have.attr", "placeholder").and("include", "ароль");
      }).type(password);
      cy.root().submit();
    });

    cy.wait(2500).get("a")
      .should('have.class', "b-top-profile__preview js-toggle-bar")
      .should("have.attr", "href")
      .and("include", "https://profile.onliner.by")
      .click()
      .get("a")
      .contains(username);
  });
});

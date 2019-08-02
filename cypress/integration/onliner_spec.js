import User from "../model/user";

describe("login", () => {
  it("sign in form test", () => {
    const user = new User();
    cy.viewport(1300, 768);

    cy.visit("https://onliner.by")
      .contains("Вход")
      .click();

    cy.login(user.username, user.password);

    cy.get(".b-top-profile__list").within(() => {
      cy.xpath("//a[@class='b-top-profile__preview js-toggle-bar']")
        .click()
        .get(".b-top-profile__header")
        .within($div => {
          cy.get(".b-top-profile__name").within(() => {
            cy.get("a").should("contain", user.username);
          });
          cy.get(".b-top-profile__logout").within(() => {
            cy.contains("Выйти").click();
          });
        });
    });
  });
});

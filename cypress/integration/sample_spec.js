import User from "../model/user";

describe("login", () => {
  it("sign in form test", () => {
    const user = new User();

    cy.viewport(1500, 768);

    cy.visit("https://onliner.by")
      .contains("div", "Вход")
      .click();

    cy.get(".auth-container form").within($form => {
      cy.get("input[type=text]", () => {
        cy.should("have.attr", "placeholder").and("include", "e-mail");
      }).type(user.username);
      cy.get("input[type=password]", () => {
        cy.should("have.attr", "placeholder").and("include", "пароль");
      }).type(user.password);
      cy.root().submit();
    });

    cy.get(".b-top-profile__list").within($div => {
      cy.xpath("//a[@class='b-top-profile__preview js-toggle-bar']")
        .click()
        .get(".b-top-profile__header")
        .within($div => {
          cy.get(".b-top-profile__name").within($div => {
            cy.get("a").should("contain", user.username);
          });
          cy.get(".b-top-profile__logout").within($div => {
            cy.contains("a", "Выйти").click();
          });
        });
    });
  });
});

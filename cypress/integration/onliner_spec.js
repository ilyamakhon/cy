import User from "../model/user";

describe("login", () => {
  it("sign in form test", () => {
    const user = new User();
    cy.viewport(1300, 768);

    cy.visit("https://onliner.by")
      .contains("Вход")
      .click();
    cy.login(user.username, user.password);
    cy.logout(user.username);
  });
});

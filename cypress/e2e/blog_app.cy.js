/* eslint-disable prefer-arrow-callback, func-names */

describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);

    const user = {
      username: "test",
      name: "test_user",
      password: "123",
    };
    cy.request("POST", `${Cypress.env("BACKEND")}/users`, user);

    cy.visit("");
  });

  it("login form is shown", function () {
    cy.contains("log in to application");
  });

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.get("#username").type("test");
      cy.get("#password").type("123");
      cy.get("#login-button").click();

      cy.contains("test_user logged in");
    });

    it("fails with wrong username", function () {
      cy.get("#username").type("wronguser");
      cy.get("#password").type("123");
      cy.get("#login-button").click();

      cy.contains("wrong user name or password");
    });

    it("fails with wrong password", function () {
      cy.get("#username").type("test");
      cy.get("#password").type("wrong password");
      cy.get("#login-button").click();

      cy.contains("wrong user name or password");
    });
  });
});

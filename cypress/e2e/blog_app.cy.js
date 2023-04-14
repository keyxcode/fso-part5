/* eslint-disable prefer-arrow-callback, func-names */

describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);

    // create new user
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

  describe("When logged in", function () {
    beforeEach(function () {
      cy.login({ username: "test", password: "123" });
    });

    it("A blog can be created", function () {
      cy.contains("create new blog").click();
      cy.get("#title").type("a blog by cypress");
      cy.get("#author").type("an author by cypress");
      cy.get("#url").type("cypress.com");
      cy.get("#create-blog").click();

      cy.contains("a blog by cypress");
      cy.contains("an author by cypress");
    });
  });
});

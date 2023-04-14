/* eslint-disable prefer-arrow-callback, func-names */

describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    cy.visit("");
  });

  it("login form is shown", function () {
    cy.contains("log in to application");
  });
});

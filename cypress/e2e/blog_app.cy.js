/* eslint-disable prefer-arrow-callback, func-names */

describe("Blog app", function () {
  it("front page can be opened", function () {
    cy.visit("");
    cy.contains("log in to application");
  });
});

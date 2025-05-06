import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the home page", () => {
  cy.visit("/");
});

When("I click the {String} button", (buttonText) => {
  cy.contains("button", buttonText).click();
});

Then("the count should be increase by 1 in every click", () => {
  cy.get("div").should(($div) => {
    const count = parseInt($div.text(), 10);
    expect(count).to.be.at.least(1);
  });
});

When("I type {string} into the input field", (text) => {
  cy.get("input").type(text);
});

Then("the input field value should be {string}", (value) => {
  cy.get("input").should("have.value", value);
});

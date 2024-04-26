import * as Locators from "./locators/locators.json";
export default class LoginPage {
  static submitVisibility() {
    return cy.get(Locators.submitButton).should("be.visibe");
  }
  static submitLogin() {
    return cy.get(Locators.submitButton).click();
  }
  static userInputVisibility() {
    return cy.get(Locators.userInput).should("be.visible");
  }
  static userInputType(text) {
    return cy.get(Locators.userInput).type(text);
  }
  static passwordInputVisibility() {
    return cy.get(Locators.passwordInput).should("be.visible");
  }
  static passwordInputType(text) {
    return cy.get(Locators.passwordInput).type(text);
  }
  static validateErrorMessage(message) {
    return cy
      .get(Locators.errorWrapper)
      .should("exist")
      .and("have.text", message);
  }
  static validateUserErrorColor(color) {
    return cy
      .get(Locators.userInput)
      .should("exist")
      .and("have.css", "borderBottomColor", color);
  }
  static validatePasswordErrorColor(color) {
    return cy
      .get(Locators.userInput)
      .should("exist")
      .and("have.css", "borderBottomColor", color);
  }
  static productsTitleVisibility() {
    return cy.get(Locators.productsTitle).should("be.visible");
  }
  static validateProductTitle(title) {
    return cy.get(Locators.productsTitle).should("have.text", title);
  }
}

const LoginPage = require("../utility/LoginPage.js");
import * as BasicData from "../utility/data/data.json";
describe("saucedemo testing", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false });
  });
  it("user sumbits login with no credentials", () => {
    LoginPage.submitLogin();
    LoginPage.validateErrorMessage(BasicData.UserErrorMessage);
    LoginPage.validateUserErrorColor(BasicData.ErrorColor);
    LoginPage.validatePasswordErrorColor(BasicData.ErrorColor);
  });
  it("User will complete email and leave password empty", () => {
    LoginPage.userInputVisibility();
    LoginPage.userInputType(BasicData.ValidUser);
    LoginPage.submitLogin();
    LoginPage.validateErrorMessage(BasicData.PasswordErrorMessage);
    LoginPage.validatePasswordErrorColor(BasicData.ErrorColor);
  });
  it("User will complete password and leave user empty", () => {
    LoginPage.passwordInputVisibility();
    LoginPage.passwordInputType(BasicData.ValidPassword);
    LoginPage.submitLogin();
    LoginPage.validateErrorMessage(BasicData.UserErrorMessage);
    LoginPage.validateUserErrorColor(BasicData.ErrorColor);
  });
  it("User will complete credentials and log in", () => {
    LoginPage.passwordInputVisibility();
    LoginPage.userInputVisibility();
    LoginPage.userInputType(BasicData.ValidUser);
    LoginPage.passwordInputType(BasicData.ValidPassword);
    LoginPage.submitLogin();
    LoginPage.productsTitleVisibility();
    LoginPage.validateProductTitle(BasicData.ProductsTitle);
  });
  it("User enters wrong credentials", () => {
    LoginPage.passwordInputVisibility();
    LoginPage.userInputVisibility();
    LoginPage.userInputType(BasicData.InvalidUser);
    LoginPage.passwordInputType(BasicData.InvalidPassword);
    LoginPage.submitLogin();
    LoginPage.validateErrorMessage(BasicData.CredentialsErrorMessage);
    LoginPage.validateUserErrorColor(BasicData.ErrorColor);
    LoginPage.validatePasswordErrorColor(BasicData.ErrorColor);
  });
});

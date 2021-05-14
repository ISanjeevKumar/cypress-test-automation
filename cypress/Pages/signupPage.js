const signUpPage = {
  signUpLnk: "a[routerlink='/register']",
  usernameField: "input[formcontrolname=username]",
  passwordField: "input[formcontrolname=password]",
  emailField: "input[formcontrolname=email]",
  signUpBtn: "button[type=submit]",

  goto() {
    cy.performClick(this.signUpLnk);
  },
  isSignupPageLoaded() {
    cy.contains("h1", "Sign up").should("be.visible");
  },

  signUpWithUserdata(username, email, password) {
    cy.enterText(username, this.usernameField);
    cy.enterText(email, this.emailField);
    cy.enterText(password, this.passwordField);
    cy.performClick(this.signUpBtn);
  },

  isUserSignedUp(username) {
    cy.contains("a", username).should("be.visible");
  },
};
export default { ...signUpPage };

import signupPage from "../../../Pages/signupPage";

let user;

describe("Register new User tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.task("testdata").then((object) => {
      user = object;
    });
  });

  it("Register with new user", () => {
    signupPage.goto();
    signupPage.isSignupPageLoaded();
    signupPage.signUpWithUserdata(user.username, user.email, user.password);
    signupPage.isUserSignedUp(user.username);
  });
});

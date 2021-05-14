import signupPage from "../../../Pages/signupPage";

describe("Sign up Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Sign up with valid data", () => {
    signupPage.goto();
    signupPage.isSignupPageLoaded();
    signupPage.signUpWithUserdata(
      "Naruto_username2",
      "naruto2@hiddenvillage.com",
      "naruto@123"
    );
    signupPage.isUserSignedUp("Naruto_username2");
  });
});

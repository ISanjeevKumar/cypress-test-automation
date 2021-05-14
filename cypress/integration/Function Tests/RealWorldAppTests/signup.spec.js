describe("Sign up Tests", () => {

    it("Sign up with valid data",()=>{
       cy.visit('/');
       cy.get("a[routerlink='/register']").click();
       cy.get("input[formcontrolname=username]").type("SanjeevKumar00071");
       cy.get("input[formcontrolname=email]").type("SanjeevKumar00071@demo.com");
       cy.get("input[formcontrolname=password]").type("SanjeevKumar@123");
       cy.get("button[type=submit]").click();
       cy.contains("a","SanjeevKumar00071").should('be.visible');
       
    });
});

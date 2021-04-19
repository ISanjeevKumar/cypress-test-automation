
describe("Google Search Tests", () => {

  it("Search currency conversion tool",()=>{
      cy.visit('/');
      cy.searchText('Currency Conversion');
  });
});

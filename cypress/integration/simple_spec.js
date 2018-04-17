describe("Home page", () => {
    it("loads the default Angular welcome page", () => {
        cy.visit("http://localhost:4200")
        cy.contains("Welcome");
    })

/*    it("goes to the login page", () => {
        cy.visit("http://localhost:4200/#/welcome")
        cy.contains("Log out").click();
        cy.contains("Authorized use only");        
    })
*/
})

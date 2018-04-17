describe("Home page", () => {
    it("loads the default Angular welcome page", () => {
        cy.visit("http://localhost:4200")
        cy.contains("Welcome");
    })
})

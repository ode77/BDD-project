import{Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given ('I am on MatchinGengine home page',() => {
    cy.visit('https://www.matchingengine.com/')
})
Then("I Verify that home page is displayed successfully",() =>{
    cy.url().should("contain",'matchingengine.com')
})
When("I Expand 'Modules Icon' in the header section",()=>{
    cy.get("div[id='burger']").should('be.visible') .trigger('mouseover').click()
    // cy.get("div[id='burger']").should('be.visible').click()
})
When("I click on 'Repertoire Management Modules' from the meneu",()=>{
    cy.get("div:nth-of-type(1) > .is-boxed.navbar-dropdown > a:nth-of-type(2)").should('be.visible').click()

    
})
When("I Scroll to the 'Additional Feature' section",()=>{
    cy.get("div[class='vc_row wpb_row vc_row-fluid vc_custom_1661355414511'] h2[class='vc_custom_heading']").scrollIntoView().should('be.visible')
    
})
Then("I Click on 'Product Supported'",() =>{
    cy.get("li:nth-of-type(2) > a > .vc_tta-title-text").should('be.visible').click()

})
Then("I Verify 'Producted Supported' list is visible",() =>{
    cy.contains('Cue Sheet / AV Work').should('exist')
    cy.contains('Recording').should('exist')
    cy.contains('Bundle').should('exist')
    cy.contains('Advertisement').should('exist')
})


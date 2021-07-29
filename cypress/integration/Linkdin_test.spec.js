/// <reference types="cypress"/>

import{LinkindinPage} from "../pages/linkdinPage"

let linkdIn = LinkindinPage;
 

describe('Testing log In in Linkdin',()=>{

    // Creating to vist the  linkdin page
    it('Visit the Linkdin page',()=>{
        cy.visit(linkdIn.Url)
    })

    it('click sign in Button',()=>{
        cy.get(linkdIn.signIn).click()
    })  

    it('Enter Username',()=>{
     cy.get(linkdIn.userName).type(linkdIn.enterMail)
    })

    it('Enter Password',()=>{
      cy.get(linkdIn.password).type(linkdIn.enterPassword)
    })

    it('Enter Accedi',()=>{
        cy.get(linkdIn.accedi).click()
        
    })
})
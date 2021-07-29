/// <reference types ="cypress" />

let search = 'automation test';

describe('test google',()=>{
    it('google test', ()=>{
        cy.visit('www.google.com')
        cy.get('#L2AGLb > .jyfHyd').scrollIntoView().should('be.visible').click()
        cy.get('.gLFyf').type(search).type('{enter}')
        cy.get('body').then((body)=>{
            console.log(body.find('h3:contains(href)'))
        })
        console.log('check automation')
        console.log('the following automation links')
      

    })


})



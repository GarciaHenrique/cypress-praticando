/// <reference types="cypress" />

const elements = {
    urls: {
        home: '/'
    },
    buttons: {
        cadastro: '.fa-lock',
        login: '.fa-user'
    },
    fields: {
        name: '#user',
        email: '#user'
    }
}

export default{

    // Abre a página web e entra a tela de cadastro
    accessRegister(){
        cy.visit(elements.urls.home).get('.header-logo')
        cy.get(elements.buttons.cadastro).should('be.visible').click()
        cy.get(elements.fields.name).should('be.visible')
    },

    // Abre a página web e entra a tela de login
    accessLogin(){
        cy.visit(elements.urls.home).get('.header-logo')
        cy.get(elements.buttons.login).should('be.visible').click()
        cy.get(elements.fields.email).should('be.visible')
    }

}
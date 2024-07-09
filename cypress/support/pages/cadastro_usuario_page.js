/// <reference types="cypress" />

const elements = {
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    buttons: {
        register: '#btnRegister',
        registerSucceedConfirm: '.swal2-confirm',
        dashboard: '.dashboard_tab_button a'
    },
    messages: {
        error: '#errorMessageFirstName'
    },
    texts: {
        registerSucceedTitle: '#swal2-title',
        registerSucceedSubtitle: '#swal2-html-container'
    }
}

export default{

    
// Envia o cadastro
sendRegister(){
    cy.get(elements.buttons.register).click()
},

// Valida mensagens de erro
errorMessage(message){
    cy.get(elements.messages.error).should('have.text', message)
},

// Insere nome
insertName(name){
    cy.get(elements.fields.name).type(name)
},

// Insere e-mail
insertEmail(email){
    cy.get(elements.fields.email).type(email)
},

// Insere senha
insertPassword(password){
    cy.get(elements.fields.password).type(password)
},

// Cadastro realizado
registerSucceed(name){
    cy.get(elements.texts.registerSucceedTitle).should('be.visible')
    cy.get(elements.texts.registerSucceedSubtitle).should('have.text', `Bem-vindo ${name}`)
    cy.get(elements.buttons.registerSucceedConfirm).should('be.visible').click()
    cy.get(elements.buttons.dashboard).should('be.visible')
}

}


const elements = {
    buttons: {
        login: '#btnLogin',
        checkbox: '#materialUnchecked',
        loginSucceedConfirm: '.swal2-confirm'
    },
    messages: {
        errorMessage: '.invalid_input'
    },
    fields: {
        email: '#user',
        password: '#password'
    },
    texts: {
        loginSucceedTitle: '#swal2-title',
        loginSucceedSubtitle: '#swal2-html-container',
        logedIn: '#userLogged'
    }
}

export default{

    // Aperta botão de Login
    pressLogin(){
        cy.get(elements.buttons.login).should('be.visible').click()
    },

    // Valida mensagens de erro
    errorMessages(message){
        cy.get(elements.messages.errorMessage).should('be.visible').should('have.text', message)
    },

    // Insere email
    insertEmail(email){
        cy.get(elements.fields.email).type(email)
    },

    // Insere senha
    insertPassword(password){
        cy.get(elements.fields.password).type(password)
    },

    // Marca de desmarca checkbox
    checkbox(checkboxBoolean){
        if (checkboxBoolean == true) {
            cy.get(elements.buttons.checkbox).check()
        }else{
            cy.get(elements.buttons.checkbox).uncheck()
        }
    },

    // Valida Login realizado
    loginSucceed(email){
        cy.get(elements.texts.loginSucceedTitle).should('be.visible').should('contain', 'Login realizado')
        cy.get(elements.texts.loginSucceedSubtitle).should('be.visible').should('contain', `Olá, ${email}`)
        cy.get(elements.buttons.loginSucceedConfirm).should('be.visible').click()
        cy.get(elements.texts.logedIn).should('be.visible')
    }

}
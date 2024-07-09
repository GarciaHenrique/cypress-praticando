import { faker } from '@faker-js/faker'

const Email = faker.internet.email()

import common_page from "../support/pages/common_page"
import login_page from "../support/pages/login_page"

const invalidUserData = require('../fixtures/invalid_data.json')
const validUserData = require('../fixtures/valid_data.json')

describe('Login', () => {
    
    beforeEach('Acessar tela de Login', () => {
        common_page.accessLogin()
    })

    it('E-mail vazio', () => {
        login_page.pressLogin()
        login_page.errorMessages('E-mail inválido.')
    })

    it('E-mail inválido', () => {
        login_page.insertEmail(invalidUserData.invalidEmail)
        login_page.pressLogin()
        login_page.errorMessages('E-mail inválido.')
    })

    it('Senha vazia', () => {
        login_page.insertEmail(Email)
        login_page.pressLogin()
        login_page.errorMessages('Senha inválida.')
    })

    it('Senha inválida', () => {
        login_page.insertEmail(Email)
        login_page.insertPassword(invalidUserData.invalidPassword)
        login_page.pressLogin()
        login_page.errorMessages('Senha inválida.')
    })

    it('Login com sucesso sem "Lembrar de mim"', () => {
        login_page.insertEmail(Email)
        login_page.insertPassword(validUserData.password)
        login_page.checkbox(false)
        login_page.pressLogin()
        login_page.loginSucceed(Email)
    })

    it('Login com sucesso com "Lembrar de mim"', () => {
        login_page.insertEmail(Email)
        login_page.insertPassword(validUserData.password)
        login_page.checkbox(true)
        login_page.pressLogin()
        login_page.loginSucceed(Email)
    })

})
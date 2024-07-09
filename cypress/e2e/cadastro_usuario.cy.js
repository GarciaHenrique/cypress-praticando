/// <reference types="cypress" />

import common_page from "../support/pages/common_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page"
import { faker } from '@faker-js/faker'

const Name = faker.person.fullName()
const Email = faker.internet.email()

const invalidUserData = require('../fixtures/invalid_data.json')
const validUserData = require('../fixtures/valid_data.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessar tela de cadastro de usuário', () =>{
        common_page.accessRegister()
    })
    
    it('Campo "Nome" vazio', () => {
        cadastro_usuario_page.sendRegister()
        cadastro_usuario_page.errorMessage('O campo nome deve ser prenchido')
    })

    it('Campo "E-mail" vazio', () => {
        cadastro_usuario_page.insertName(Name)
        cadastro_usuario_page.sendRegister()
        cadastro_usuario_page.errorMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo "E-mail" inválido', () => {
        cadastro_usuario_page.insertName(Name)
        cadastro_usuario_page.insertEmail(invalidUserData.invalidEmail)
        cadastro_usuario_page.sendRegister()
        cadastro_usuario_page.errorMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo "Senha" vazio', () => {
        cadastro_usuario_page.insertName(Name)
        cadastro_usuario_page.insertEmail(Email)
        cadastro_usuario_page.sendRegister()
        cadastro_usuario_page.errorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo "Senha" inválido', () => {
        cadastro_usuario_page.insertName(Name)
        cadastro_usuario_page.insertEmail(Email)
        cadastro_usuario_page.insertPassword(invalidUserData.invalidPassword)
        cadastro_usuario_page.sendRegister()
        cadastro_usuario_page.errorMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', () => {
        cadastro_usuario_page.insertName(Name)
        cadastro_usuario_page.insertEmail(Email)
        cadastro_usuario_page.insertPassword(validUserData.password)
        cadastro_usuario_page.sendRegister()
        cadastro_usuario_page.registerSucceed(Name)
    })

})
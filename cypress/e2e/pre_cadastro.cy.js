/// <reference types="cypress" />
const faker = require("faker");

context("Funcionalidade do Pré-cadastro", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  it("Deve completar o cadastro com sucesso com informações verdadeiras", () => {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type(password);
    cy.get('input[name="register"]').click();
  });

  it("Deve aparecer uma mensagem de erro quando deixar o campo email em branco", () => {
    const password = faker.internet.password();

    cy.get("#reg_password").type(password);
    cy.get('input[name="register"]').click();
  });

  it("Deve aparecer uma mensagem de erro quando deixar o campo senha em branco", () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    cy.get("#reg_email").type(email);
    cy.get('input[name="register"]').click();
  });

  it("Deve aparecer uma mensagem de erro quando introduzir um email inválido", () => {
    const password = faker.internet.password();
    const invalidEmail = "aluno_ebac";

    cy.get("#reg_email").type(invalidEmail);
    cy.get("#reg_password").type(password);
    cy.get('input[name="register"]').click();
  });
});

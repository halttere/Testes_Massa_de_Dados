/// <reference types="cypress" />
const faker = require("faker");

context("Funcionalidade do login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  it("Deve fazer o login com sucesso com as credenciais válidas", () => {
    const usuario = faker.internet.userName();
    const email = faker.internet.email();

    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
  });

  it("Deve apresentar mensagem de erro quando entrar com username inválido", () => {
    const usuario = faker.internet.userName();

    cy.get("#username").type("tes@ebac.com.br");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
  });

  it("Deve apresentar mensagem de erro quando entrar com senha inválida", () => {
    const senha = faker.internet.password();

    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("senha");
    cy.get(".woocommerce-form > .button").click();
  });

  it("Deve apresentar mensagem de erro quando deixar o campo de username em branco", () => {
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
  });

  it("Deve apresentar mensagem de erro quando deixar o campo de senha em branco", () => {
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get(".woocommerce-form > .button").click();
  });
});

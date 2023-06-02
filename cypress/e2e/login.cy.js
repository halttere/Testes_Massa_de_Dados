/// <reference types="cypress" />
const perfil = require("../fixtures/perfil.json");
context("Funcionalidade Login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve fazer login com sucesso usando arquivo de dados", () => {
    cy.get("#username").type(perfil.usuario);
    cy.get("#password").type(perfil.senha);
    cy.get(".woocommerce-form > .button").click();
    cy.get(".page-title").should("contain", "Minha conta");
  });

  it.only("Deve fazer login com sucesso usando o fixture", () => {
    cy.fixture("perfil").then((dados) => {
      cy.get("#username").type(dados.usuario);
      cy.get("#password").type(dados.senha, { log: false });
      cy.get(".woocommerce-form > .button").click();
    });
  });
});

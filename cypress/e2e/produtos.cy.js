/// <reference types="cypress" />

context("Funcionalidade de Produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });

  it("Deve exibir corretamente os produtos", () => {
    cy.get(".product-block.grid").should("be.visible");
  });

  it("Deve adicionar um produto ao carrinho de compras", () => {
    cy.get(".product-block.grid").first().click();
    cy.get(".single_add_to_cart_button").click();
  });

  it("Deve filtrar os produtos por categoria", () => {
    cy.get(".category-inside-title").click();
    cy.get("#menu-item-1003 > a").click();
  });

  it("Deve exibir a descrição de um produto", () => {
    cy.get(".product-block.grid").first().click();
    cy.get("#tab-title-description > a").should("contain.text", "Descrição");
  });
});

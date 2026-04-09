export class BasePage {
  visit(path = "/") {
    cy.visit(path);
  }
}

import { BasePage } from "./base.page";

export class FormsPage extends BasePage {
  selectors = {
    // TODO: mapear seletores robustos
  };

  openPracticeForm() {
    this.visit("/automation-practice-form");
  }

  // TODO: criar metodos de acao e validacao orientados ao dominio.
}

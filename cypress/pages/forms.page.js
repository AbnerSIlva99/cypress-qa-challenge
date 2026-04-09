import { BasePage } from "./base.page";

export class FormsPage extends BasePage {
  selectors = {
    // TODO: map robust selectors
  };

  openPracticeForm() {
    this.visit("/automation-practice-form");
  }

  // TODO: add domain-oriented action and assertion methods.
}

import { useCounter } from "../../src/App.js";

describe("useCounter hook e2e test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("should increment count value by initial value (0) onClick", () => {
    cy.get("button").click();
    cy.get("h1").contains("0");
  });

  it("should increment count value by 1 after 2 seconds", () => {
    cy.get("button").trigger("mousedown");
    cy.wait(1000);
  //  cy.get("h1").should("have.text", "1248");
    cy.get("h1").contains("1");
    cy.wait(1000);
   // cy.get("h1").should("have.text", "2");
    cy.get("h1").contains("2");

  });

  it("should decrement count value by 1 after 1 seconds", () => {
    cy.get("button").trigger("mousedown");
    cy.wait(1000);
    cy.get("h1").contains("1");

    cy.get("button").trigger("mouseleave");
    cy.wait(1000);
    cy.get("h1").contains("0");
  });
});

describe("App Page", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      },
      {
        fixture: "users.json",
      }
    );

    cy.visit("http://localhost:3000/");
  });

  it("Displays the correct amount of flex items", () => {
    cy.fixture("users.json").then((users) => {
      cy.get("[data-testid=flex-item]").should("have.length", users.length);
    });
  });

  it("Changes the label text after clicking each box", () => {
    cy.get("[data-testid=flex-item]").each(($el) => {
      cy.wrap($el).click();
      cy.get("[data-testid=label]").should("have.text", $el.text());
    });
  });

  it("Resets the label to the initial value on 'Clear' click", () => {
    cy.get("[data-testid=flex-item]").first().click();
    cy.get("[data-testid=clear]").click();
    cy.get("[data-testid=label]").should("have.text", "Click a box");
  });

  it("Scrolls back to the top of the page on 'Clear' click", () => {
    cy.get("[data-testid=clear]").click();
    cy.window().should("have.property", "scrollY", 0);
  });

  it("Displays a message when all of the boxes are clicked", () => {
    cy.get("[data-testid=flex-item]").each(($el) => {
      cy.wrap($el).click();
    });
    cy.get("[data-testid=all-clicked-label]").should("be.visible");
  });
});

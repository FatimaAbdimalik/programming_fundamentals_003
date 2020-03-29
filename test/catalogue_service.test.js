const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
});
describe("catalogueService.checkBookByTitle", () => {
  test("returns true if the book exists", () => {
    expect(
      catalogueService.checkBookByTitle(
        "The Assassination of Margaret Thatcher"
      )
    ).toBe(true);
  });
});
describe("cataloguesService.countBooksByFirstLetter", () => {
  test("return total number of books that begins with given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });
});
describe("cataloguesService.getQuantity", () => {
  test("return quantity of books that in stock", () => {
    expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
  });
});

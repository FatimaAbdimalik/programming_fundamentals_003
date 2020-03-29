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
describe("cataloguesService.getBooksByAuthor", () => {
  test("return an array of books when receive an authors's name", () => {
    expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
      { title: "2666", author: "Robert Bolaño", quantity: 17 },
      { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
    ]);
  });
});
describe("cataloguesService.checkQuantity", () => {
  test("return true if there at least as many books in stock as the given quantity", () => {
    expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
  });
});

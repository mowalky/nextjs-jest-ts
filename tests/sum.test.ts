import sum from "../helpers/sum";

// describe
describe("Sum function test", () => {
  it("should sum numbers correctly", () => expect(sum(1, 2)).toBe(3));
});

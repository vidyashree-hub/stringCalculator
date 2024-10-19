import { add } from "./stringValueCalculator";

describe("String Calculator", () => {
  test("should ignore newlines and calculate sum correctly", () => {
    expect(add("//;\n1;\n2\n3;4\n5")).toBe(15);
  });
  test("should handle empty string", () => {
    expect(add("")).toBe(0);
  });
  test("should handle input with no numbers", () => {
    expect(add("//;\n;;;")).toBe(0);
  });
  test("should return sum of positive numbers", () => {
    expect(add("//;\n1;2\n6,8;6")).toBe(23);
  });

  test("should throw error for negative numbers", () => {
    expect(() => add("//;\n1;2\n3,-4;5")).toThrow(
      "Negative numbers not allowed: -4"
    );
  });
  test("should throw error for values starting with 1000 series", () => {
    expect(() => add("//;\n1;2\n1000;3")).toThrow(
      "Values starting with 1000 series not allowed: 1000"
    );
  });
});

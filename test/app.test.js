import { describe, it, expect } from "vitest";
import { checkLoveCompatibility } from "../public/js/app";

describe("checkLoveCompatibility", () => {
  it("should return true for one even and one odd petal count", () => {
    expect(checkLoveCompatibility(2, 3)).toBe(true);
    expect(checkLoveCompatibility(3, 4)).toBe(true);
  });

  it("should return false for both even or both odd petal counts", () => {
    expect(checkLoveCompatibility(2, 4)).toBe(false);
    expect(checkLoveCompatibility(3, 5)).toBe(false);
  });

  it("should return error message for non-integer petal counts", () => {
    expect(checkLoveCompatibility(2.5, 3)).toBe(
      "Both petal counts must be integers"
    );
    expect(checkLoveCompatibility(3, "four")).toBe(
      "Both petal counts must be integers"
    );
  });
});

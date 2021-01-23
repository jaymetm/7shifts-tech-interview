import { Add } from "./string-calculator";
import { expect } from "chai";

describe("String Calculator, Add - basic functionality", () => {
  it("Returns 0 when passed an empty string", () => {
    const expected = 0;
    const actual = Add("");
    expect(actual).to.deep.equal(expected);
  });
  it("Returns an integer when passed in a string of numbers", () => {
    const expected = "number";
    const actual = Add("1,2");
    expect(typeof actual).to.deep.equal(expected);
  });

  it("Correctly handles only one number being passed in (one digit)", () => {
    const expected = 4;
    const actual = Add("4");
    expect(actual).to.deep.equal(expected);
  });
  it("Correctly handles only one number being passed in (multiple digits)", () => {
    const expected = 306;
    const actual = Add("306");
    expect(actual).to.deep.equal(expected);
  });
  it("Correctly handles a long list of numbers (ex. 10)", () => {
    const expected = 55;
    const actual = Add("1,2,3,4,5,6,7,8,9,10");
    expect(actual).to.deep.equal(expected);
  });
  it("Example input works: Returns 8 when passed in 1,2,5", () => {
    const expected = 8;
    const actual = Add("1,2,5");
    expect(actual).to.deep.equal(expected);
  });
});

describe("Handles New Lines, Custom Delimiters, and Negatives", () => {
  it("Adds numbers with new line symbol attached (example input 1)", () => {
    const expected = 6;
    const actual = Add("1\n,2,3");
    expect(actual).to.deep.equal(expected);
  });
  it("Adds numbers with new line symbol attached (example input 2)", () => {
    const expected = 7;
    const actual = Add("1,\n2,4");
    expect(actual).to.deep.equal(expected);
  });
  it("Supports a custom delimiter (example input 1)", () => {
    const expected = 8;
    const actual = Add("//;\n1;3;4");
    expect(actual).to.deep.equal(expected);
  });
  it("Supports a custom delimiter (example input 2)", () => {
    const expected = 6;
    const actual = Add("//$\n1$2$3");
    expect(actual).to.deep.equal(expected);
  });
  it("Supports a custom delimiter (example input 3)", () => {
    const expected = 13;
    const actual = Add("//@\n2@3@8");
    expect(actual).to.deep.equal(expected);
  });
  it("Throws an exception for negative numbers; negative at the end", () => {
    const expected = "Negatives not allowed. Negatives: -5";
    const actual = Add("1,2,-5");
    expect(actual).to.deep.equal(expected);
  });
  it("Throws an exception for negative numbers; negative in the middle", () => {
    const expected = "Negatives not allowed. Negatives: -2";
    const actual = Add("1,-2,5");
    expect(actual).to.deep.equal(expected);
  });
  it("Throws an exception for negative numbers; negative at the beginning", () => {
    const expected = "Negatives not allowed. Negatives: -1";
    const actual = Add("-1,2,5");
    expect(actual).to.deep.equal(expected);
  });
  it("Throws an exception for negative numbers with custom delimiter", () => {
    const expected = "Negatives not allowed. Negatives: -8";
    const actual = Add("//@\n2@3@-8");
    expect(actual).to.deep.equal(expected);
  });
  it("Throws an exception for negative numbers with custom delimiter; negative at the beginning", () => {
    const expected = "Negatives not allowed. Negatives: -8";
    const actual = Add("//@\n2@3@-8");
    expect(actual).to.deep.equal(expected);
  });
  it("Returns multiple negatives", () => {
    const expected = "Negatives not allowed. Negatives: -2,-8,-5";
    const actual = Add("//@\n-2@3@-8,-5");
    expect(actual).to.deep.equal(expected);
  });
});

describe("Bonus Section Tests", () => {
  it("Ignores numbers greater than 1000", () => {
    const expected = 2;
    const actual = Add("2,1001");
    expect(actual).to.deep.equal(expected);
  });
  it("Ignores single number string greater than 1000", () => {
    const expected = 0;
    const actual = Add("1001");
    expect(actual).to.deep.equal(expected);
  });
  it("Delimiters can be arbitrary length", () => {
    const expected = 6;
    const actual = Add("//***\n1***2***3");
    expect(actual).to.deep.equal(expected);
  });
  it("Allows matching delimiters of different lengths", () => {
    const expected = 6;
    const actual = Add("//***\n1**2***3");
    expect(actual).to.deep.equal(expected);
  });
  it("Allow for multiple delimiters", () => {
    const expected = 6;
    const actual = Add("//$,@\n1$2@3");
    expect(actual).to.deep.equal(expected);
  });
  it("Allow for multiple delimiters of arbitrary legth", () => {
    const expected = 10;
    const actual = Add("//$,@@,***,$$\n1$2@@3***4");
    expect(actual).to.deep.equal(expected);
  });
});

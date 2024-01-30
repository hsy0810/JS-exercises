import { add, sub, mul , div } from "./index.js";

describe("add", () => {
  it("複素数の足し算", async () => {
    const complex1 = { real: 1, imaginary: 2 };
    const complex2 = { real: 3, imaginary: 4 };
    const result = add(complex1, complex2);
    expect(result).toEqual("4 + 6i");
  });

  it("複素数の引き算", async () => {
    const complex1 = { real: 1, imaginary: 2 };
    const complex2 = { real: 3, imaginary: 4 };
    const result = sub(complex1, complex2);
    expect(result).toEqual("-2 - 2i");
  });

  it("複素数の掛け算", async () => {
    const complex1 = { real: 1, imaginary: 2 };
    const complex2 = { real: 3, imaginary: 4 };
    const result = mul(complex1, complex2);
    expect(result).toEqual("-5 + 10i");
  });

  it("複素数の割り算", async () => {
    const complex1 = { real: 4, imaginary: 1 };
    const complex2 = { real: 2, imaginary: 1 };
    const result = div(complex1, complex2);
    expect(result).toEqual("3.25 + 2i");
  });
});

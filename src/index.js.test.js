import Saludando from ".";

describe("it should say Saludando", () => {
  it("should greet 'Luis'", () => {
    expect(Saludando()).toBe("Hola, Luis");
  });

  it("should greet 'Navas'", () => {
    expect(Saludando("Navas")).toBe("Hola, Navas");
  });
});
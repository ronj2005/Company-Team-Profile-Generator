const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const int = new Intern("Foo", 1, "test@test.com", testValue);
  expect(int.school).toBe(testValue);
});

test("getRole() should return \"intern\"", () => {
  const testValue = "intern";
  const int = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(int.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const int = new Intern("Foo", 1, "test@test.com", testValue);
  expect(int.getSchool()).toBe(testValue);
});
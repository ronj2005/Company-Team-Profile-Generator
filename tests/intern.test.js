const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "GSU";
  const int = new Intern("FooBar", 1, "test@test.com", testValue);
  expect(int.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const int = new Intern("FooBar", 1, "test@test.com", "GSU");
  expect(int.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "GSU";
  const int = new Intern("FooBar", 1, "test@test.com", testValue);
  expect(int.getSchool()).toBe(testValue);
});
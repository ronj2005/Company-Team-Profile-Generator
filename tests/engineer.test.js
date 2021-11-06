const Engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("FooBar", 1, "test@test.com", testValue);
  expect(eng.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const eng = new Engineer("FooBar", 1, "test@test.com", "GitHubUser");
  expect(eng.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("FooBar", 1, "test@test.com", testValue);
  expect(eng.getGithub()).toBe(testValue);
});
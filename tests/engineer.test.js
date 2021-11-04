const Engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"engineer\"", () => {
  const testValue = "Engineer";
  const eng = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(eng.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(eng.getGithub()).toBe(testValue);
});
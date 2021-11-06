const Contractor = require("../lib/contractor");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const con = new Contractor("FooBar", 1, "test@test.com", testValue);
  expect(con.github).toBe(testValue);
});

test("getRole() should return \"Contractor\"", () => {
  const testValue = "Contractor";
  const con = new Contractor("FooBar", 1, "test@test.com", "GitHubUser");
  expect(con.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const con = new Contractor("FooBar", 1, "test@test.com", testValue);
  expect(con.getGithub()).toBe(testValue);
});
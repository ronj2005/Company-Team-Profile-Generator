const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const man = new Manager("Foo", 1, "test@test.com", testValue);
  expect(man.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const man = new Manager("Foo", 1, "test@test.com", 100);
  expect(man.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const man = new Manager("Foo", 1, "test@test.com", testValue);
  expect(man.getOfficeNumber()).toBe(testValue);
});
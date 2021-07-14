const Manager = require("../lib/Manager.js");

test("creates an Manager object", () => {
  const manager = new Manager("Tim", 1, "test@email.com", 4);

  expect(manager.name).toBe("Tim");
  expect(manager.id).toBe(1);
  expect(manager.email).toBe("test@email.com");
  expect(manager.officeNumber).toBe(4);
});

test("returns the name via getName()", () => {
  const manager = new Manager("John", 1, "test@email.com");

  expect(manager.getName()).toBe("John");

});

test("returns the id via getId()", () => {
  const manager = new Manager("Tim", 5, "test@email.com");

  expect(manager.getId()).toBe(5);

});

test("returns the email via getEmail()", () => {
  const manager = new Manager("Tim", 1, "newtest@gmail.com");

  expect(manager.getEmail()).toBe("newtest@gmail.com");

});

test("returns 'manager' via getRole()", () => {
  const manager = new Manager("Tim", 1, "test@email.com");

  expect(manager.getRole()).toBe("Manager");

});
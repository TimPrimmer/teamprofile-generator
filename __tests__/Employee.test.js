const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Tim", 1, "test@email.com");

  expect(employee.name).toBe("Tim");
  expect(employee.id).toBe(1);
  expect(employee.email).toBe("test@email.com");

});

test("returns the name via getName()", () => {
  const employee = new Employee("John", 1, "test@email.com");

  expect(employee.getName()).toBe("John");

});

test("returns the id via getId()", () => {
  const employee = new Employee("Tim", 5, "test@email.com");

  expect(employee.getId()).toBe(5);

});

test("returns the email via getEmail()", () => {
  const employee = new Employee("Tim", 1, "newtest@gmail.com");

  expect(employee.getEmail()).toBe("newtest@gmail.com");

});
test("returns 'employee' via getRole()", () => {
  const employee = new Employee("Tim", 1, "test@email.com");

  expect(employee.getRole()).toBe("Employee");

});
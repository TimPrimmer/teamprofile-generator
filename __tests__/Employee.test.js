const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Tim", 1, "test@email.com");

  expect(employee.name).toBe("Tim");
  expect(employee.id).toBe(1);
  expect(employee.email).toBe("test@email.com");

});

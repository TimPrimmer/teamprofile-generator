const Intern = require("../lib/Intern.js");

test("creates an Intern object", () => {
  const intern = new Intern("Tim", 1, "test@email.com", "Harvard University");

  expect(intern.name).toBe("Tim");
  expect(intern.id).toBe(1);
  expect(intern.email).toBe("test@email.com");
  expect(intern.school).toBe("Harvard University");
});

test("returns the name via getName()", () => {
  const intern = new Intern("John", 1, "test@email.com", "Harvard University");

  expect(intern.getName()).toBe("John");

});

test("returns the id via getId()", () => {
  const intern = new Intern("Tim", 5, "test@email.com", "Harvard University");

  expect(intern.getId()).toBe(5);

});

test("returns the email via getEmail()", () => {
  const intern = new Intern("Tim", 1, "newtest@gmail.com", "Harvard University");

  expect(intern.getEmail()).toBe("newtest@gmail.com");

});

test("returns the school via getSchool()", () => {
  const intern = new Intern("Tim", 1, "newtest@gmail.com", "Harvard University");

  expect(intern.getSchool()).toBe("Harvard University");

});

test("returns 'intern' via getRole()", () => {
  const intern = new Intern("Tim", 1, "test@email.com", "Harvard University");

  expect(intern.getRole()).toBe("Intern");

});
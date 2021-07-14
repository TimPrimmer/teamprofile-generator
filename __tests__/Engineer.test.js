const Engineer = require("../lib/Engineer.js");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Tim", 1, "test@email.com", "GithubUser");

  expect(engineer.name).toBe("Tim");
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe("test@email.com");
  expect(engineer.github).toBe("GithubUser");
});

test("returns the name via getName()", () => {
  const engineer = new Engineer("John", 1, "test@email.com", "GithubUser");

  expect(engineer.getName()).toBe("John");

});

test("returns the id via getId()", () => {
  const engineer = new Engineer("Tim", 5, "test@email.com", "GithubUser");

  expect(engineer.getId()).toBe(5);

});

test("returns the email via getEmail()", () => {
  const engineer = new Engineer("Tim", 1, "newtest@gmail.com", "GithubUser");

  expect(engineer.getEmail()).toBe("newtest@gmail.com");

});
test("returns the github username via getGithub()", () => {
  const engineer = new Engineer("Tim", 1, "newtest@gmail.com", "GithubUser");

  expect(engineer.getGithub()).toBe("GithubUser");

});

test("returns 'engineer' via getRole()", () => {
  const engineer = new Engineer("Tim", 1, "test@email.com", "GithubUser");

  expect(engineer.getRole()).toBe("Engineer");

});
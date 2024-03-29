const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() { // overrides the employee getRole method
    return "Engineer";
  }
}

module.exports = Engineer;
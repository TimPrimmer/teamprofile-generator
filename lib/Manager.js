const Employee = require("../lib/Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() { // overrides the employee getRole method
    return "Manager";
  }
}

module.exports = Manager;
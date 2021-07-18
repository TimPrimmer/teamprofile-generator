const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

const mockData = [
  new Manager ('Tim','1','test@email.com','54'),
  new Engineer ('Johnny','2','bravo@email.com','JohnB'),
  new Intern ('Scruffy','3','clean@email.com','Harvard University'),
  new Engineer ('Mick','4','crikey@email.com','TrickyMicky'),
  new Intern ('Lauren','5','scruff@email.com','University of Texas')
]

module.exports = mockData;
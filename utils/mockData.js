const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

const mockData = [
  new Manager ('Tim','0','test@email.com','54'),
  new Engineer ('Johnno','1','lol@email.com','JohnnoLonno'),
  new Intern ('Scruffy','2','scruff@email.com','Harvard')
]

module.exports = mockData;
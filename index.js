// packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');
const myArgs = process.argv.slice(2);

// used if the user passes in the "test" parameter when starting the node app
let mockData = {
  name: 'Tim',
  id: '0',
  email: 'test@email.com',
  officeNumber: '567'
};

// our giant questions array for inquirer
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the team managers name?",
    validate(value) {
      if (!value) {
        console.log("please enter in a name!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "id",
    message: "What is the team managers ID?",
    validate(value) {
      if (!value) {
        console.log("please enter in an ID!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is the team managers email?",
    validate(value) {
      if (!value) {
        console.log("please provide a email!")
        return false;
      }
      else { return true; }
    }
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number?",
    validate(value) {
      if (!value) {
        console.log("please enter in an office number!")
        return false;
      }
      else { return true; }
    }
  }
];

const getInput = () => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
    });
}

getInput();
// packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');


const Manager = require("./lib/Manager.js");
const myArgs = process.argv.slice(2);

// I split out the questions to another file as they just took up too much space
const questions = require("./lib/Questions.js"); 

// used if the user passes in the "test" parameter when starting the node app
let mockData = {
  name: 'Tim',
  id: '0',
  email: 'test@email.com',
  officeNumber: '567'
};

let team = [];

const getInput = () => {
  if (myArgs[0] === "test") { // if the user passes in "test" as the only argument, it will use the mock data instead skipping the prompts
    team.push(new Manager(mockData.name, mockData.id, mockData.email, mockData.officeNumber));
    console.log(team);
  }
  else {
    inquirer
      .prompt(questions.manager)
      .then((answers) => {
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        console.log(team);
      });
  }
}

getInput();
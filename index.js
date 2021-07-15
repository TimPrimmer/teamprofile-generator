// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const myArgs = process.argv.slice(2);

// I split out the questions to another file as they just took up too much space
const questions = require("./utils/questions.js");
const mockData = require("./utils/mockData.js");
const generateHTML = require("./utils/generateHTML.js");


let team = [];

const writeFiles = (fileName, data) => {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log("HTML generation failed");
      return console.error(err);
    } else {
      console.log("HTML generated successfully");
    }
  });

  let cssName = "./dist/style.css";

  fs.copyFile("./utils/style.css", "./dist/style.css", (err) => {
    if (err) {
      console.log("CSS generation failed");
      return console.error(err);
    } else {
      console.log("CSS generated successfully");
    }
  });

}

const getInput = () => {
  if (myArgs[0] === "test") { // if the user passes in "test" as the only argument, it will use the mock data instead skipping the prompts
    writeFiles("./dist/mock-index.html", generateHTML(mockData));
  }
  else {

    inquirer
      .prompt(questions.manager)
      .then((answers) => {
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));

        inquirer
          .prompt(questions.engineer)
          .then((answers) => {
            team.push(new Engineer(answers.name, answers.id, answers.email, answers.github));

            inquirer
              .prompt(questions.intern)
              .then((answers) => {
                team.push(new Intern(answers.name, answers.id, answers.email, answers.school));

                generateHTML(team);

              });

          });

      });

  }
}

getInput();
// questions for the main menu
const mainMenuQuestions = [
  {
    type: "list",
    name: "selection",
    message: "What would you like to do?",
    choices: ["1. Add Engineer", "2. Add Intern", "3. Finish building team"]
  }
];

// questions for the manager
const managerQuestions = [
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

// questions for the engineer
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineers name?",
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
    message: "What is the engineers ID?",
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
    message: "What is the engineers email?",
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
    name: "github",
    message: "What is the engineers github username?",
    validate(value) {
      if (!value) {
        console.log("please enter in an username!")
        return false;
      }
      else { return true; }
    }
  }
];

// questions for the intern
const internQustions = [
  {
    type: "input",
    name: "name",
    message: "What is the interns name?",
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
    message: "What is the interns ID?",
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
    message: "What is the interns email?",
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
    name: "school",
    message: "Where did the intern go to school?",
    validate(value) {
      if (!value) {
        console.log("please enter in a school name!")
        return false;
      }
      else { return true; }
    }
  }
];

// questions object holding all three questionnaires 
const questions = {
  menu: mainMenuQuestions,
  manager: managerQuestions,
  engineer: engineerQuestions,
  intern: internQustions
}

module.exports = questions;
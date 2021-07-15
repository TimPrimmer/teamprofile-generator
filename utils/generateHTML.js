const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

const makeCard = (data) => {
  let tempHTML = `
    <div class="team-card">
      <div class="card-top">
        <h2>${data.getName()}</h2>
        <h3>${data.getRole()}</h3>
      </div>
      <div class="card-bottom">
        <div class="card-info-box">
          <p>
            ID: ${data.getId()}
          </p>
        </div>
        <div class="card-info-box">
          <p>
            Email: ${data.getEmail()}
          </p>
        </div>
        <div class="card-info-box-bottom">
          <p>
          `;
  if (data instanceof Manager) {
    tempHTML += `Office #: ${data.officeNumber}`
  }
  if (data instanceof Engineer) {
    tempHTML += `Github: ${data.getGithub()}`
  }
  if (data instanceof Intern) {
    tempHTML += `School: ${data.getSchool()}`
  }
  tempHTML += `
          </p>
        </div>
      </div>
    </div>
    `;

  return tempHTML;
}

const generateHTML = (team) => {
  let tempHTML = "";
  tempHTML += `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <title>Team Profile</title>
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        <div id="card-holder">`;
  team.forEach(member => {
    tempHTML += `${makeCard(member)}`
  });
  tempHTML += `
        </div>
      </main>
    </body>
    </html>
    `;
  return tempHTML;
}

module.exports = generateHTML;
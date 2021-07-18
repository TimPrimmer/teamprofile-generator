const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

const makeCard = (data) => {
  let tempHTML = `
    <div class="team-card">
      <div class="card-top">
        <h2>${data.getName()}</h2>`;

  if (data instanceof Manager) {
    tempHTML += `<span class="material-icons">work</span><h3>${data.getRole()}</h3>`
  }
  if (data instanceof Engineer) {
    tempHTML += `<span class="material-icons">build</span><h3>${data.getRole()}</h3>`
  }
  if (data instanceof Intern) {
    tempHTML += `<span class="material-icons">school</span><h3>${data.getRole()}</h3>`
  }

  tempHTML += `
      </div>
      <div class="card-bottom">
        <div class="card-info-box">
          <p>
            ID: ${data.getId()}
          </p>
        </div>
        <div class="card-info-box">
          <p>
            Email: <a href = "mailto: ${data.getEmail()}">${data.getEmail()}</a>
          </p>
        </div>
        <div class="card-info-box-bottom">
          <p>
            `;

  if (data instanceof Manager) {
    tempHTML += `Office #: ${data.officeNumber}`
  }
  if (data instanceof Engineer) {
    tempHTML += `Github: <a href = "https://github.com/${data.github}">${data.github}</a>`
  }
  if (data instanceof Intern) {
    tempHTML += `School: ${data.school}`
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
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
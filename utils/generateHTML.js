
const makeCard = (data) => {
  let tempHTML = `
  <div class="team-card">
    <div class="card-top">
      <h2>Name</h2>
      <h3>Manager</h2>
    </div>
    <div class="card-bottom">
      <div class="card-info-box">
        <p>ID: 0</p>
      </div>
      <div class="card-info-box">
        <p>Email: gfddfgsk</p>
      </div>
      <div class="card-info-box-bottom">
        <p>Github/School/Office</p>
      </div>
    </div>
  </div>
  `;

  return tempHTML;
}

const generateHTML = (team) => {
  console.log(team);
  let tempHTML = "";
  tempHTML += `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="mock-style.css">
    <title>Team Profile</title>
  </head>
  
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
  
      <div id="card-holder">

      ${makeCard(team[0])}
      ${makeCard(team[1])}
      ${makeCard(team[2])}
      
      </div>
  
    </main>
  </body>
  
  </html>
  `;

  console.log(tempHTML);
}

module.exports = generateHTML;
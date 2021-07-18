# Team Profile Generator [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## Description 

A Node app that generates a professional team profile page complete with custom CSS styling

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Tests](#tests)
* [License](#license)
* [Challenges](#challenges)
* [Screenshot](#screenshot)
* [Video](#video)

## Installation 

Clone the repo or download it as a zip and extract it somewhere

## Usage 

Type in "node index" once in the develop folder using terminal/gitbash

## Contribute 

N/A 

## Tests 

Pass in the test argument to use mock data for the team instead, eg: "node index test"

## License 

This project is using the [Creative Commons](http://creativecommons.org/publicdomain/zero/1.0/) license. 

## Challenges

The inquirer loop was the real beast here. It was super difficult to get any sort of loop that doesnt error using inquirer, as its all async code. I had to do a lot of research and eventually came across an algorithm that had a basic input loop working! So I took that and fleshed it out to allow for multiple choices, and a main menu questionnaire on-top of it. The current implementation allows for effectively infinite team members to be added through the use of inquirer.

I also tried to use more of the module.exports to facilite a cleaner index.js. For example the questions needed for the inquirer prompts were simply too long to have in the main file. Something like the mock data I could have probably fit in the main file, but there's something to be said about making everything more modular and clean.

## Screenshot
![Screenshot of app and output](/imgs/screenshot.png "Team Page Example")

## Video

[Video walkthrough link!](https://drive.google.com/file/d/1-tF-Nv1Z8pxmunsETijk5cHyrut3k_nw/view)
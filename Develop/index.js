// Include packages needed for this application
const inquirer = require("inquirer");
//const generatePage = require('./src/page-template');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
//const { writeFile, copyFile } = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      //title
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the project name!");
          return false;
        }
      },
    },
    //Description
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project",
    },

    //Installation instructions
    {
      type: "input",
      name: "installation",
      message: "Provide any installation instructions for your project",
    },

    //Usage information
    {
      type: "input",
      name: "usage",
      message: "Provide any usage instructions for your project",
    },

    //contribution guidelines
    {
      type: "input",
      name: "contributing",
      message: "Provide any contribution guidelines for your project",
    },

    //Tests
    {
      type: "input",
      name: "tests",
      message: "Provide any test instructions for your project",
    },

    //License
    {
      type: "list",
      name: "license",
      message:
        "What license would you like to apply? (Check only one to apply)",
      choices: [
        "MIT",
        "BSD-2-Clause",
        "BSD-3-Clause",
        'Apache-2.0"',
        "GPL-3.0",
      ],
    },

    //Questions
    //get the gitHUb user name and create a link to it to be added to the ReadMe page
    //href="https://github.com/${header.github}"
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },

    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },

  ]);
};



// Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        message: "File created!",
      });
    });
  });
}

// Create a function to initialize app
function init() {
  promptUser().then((answers) => {
    let markdown = generateMarkdown(answers);
    writeToFile("readme.md", markdown);
  });
}

// Function call to initialize app
init();

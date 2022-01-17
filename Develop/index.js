// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
//const { writeFile, copyFile } = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [];

//MB added
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
      }
    ]);
  };

//MB end

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            message: 'File created!'
          });
        });
      });
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(answers => {
        let markdown = generateMarkdown(answers);
        writeToFile('readme-test.md', markdown);
    });
}

// Function call to initialize app
init();




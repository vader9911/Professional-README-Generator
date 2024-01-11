const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: "Please enter your project's title:",
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please enter a description of your project:',
  },
  {
    type: 'input',
    name: 'Installation',
    message: "Please enter a description of your project's installation:",
  },
  {
    type: 'input',
    name: 'Usage',
    message: "Please enter a description of your project's usage:",
  },

  {
    type: 'list',
    name: 'license',
    message: "Please enter your project's license:",
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'Other'],
  },
  {
    type: 'input',
    name: 'Contributing',
    message: "Please enter your project's contribution guidelines:",
  },
  {
    type: 'input',
    name: 'Tests',
    message: "Please describe your project's tests:",
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Please enter your GitHub username:',
  },
];

// Function to write to file
function writeToFile(folderPath, fileName, data) {
  const filePath = `${folderPath}/${fileName}`;

  fs.writeFile(filePath, generateMarkdown(data), (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`Answers have been written to ${filePath}`);
    }
  });
}

// Function to initialize app
function init() {
  const outputFolderPath = 'output'; // Specify the desired folder path
  const outputFileName = 'README.md';

  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(outputFolderPath, outputFileName, answers);
    })
    .catch((error) => {
      console.error('Error getting question/answer', error);
    });
}

// Function call to initialize app
init();

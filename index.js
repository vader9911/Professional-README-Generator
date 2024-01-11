const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "Please enter your project's title:",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: "Please enter your project's license:",
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'Other'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Please enter your project's contributions:",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Please describe your project's tests:",
  },
  {
    type: 'input',
    name: 'questions',
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

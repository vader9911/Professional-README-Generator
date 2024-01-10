
const fs = require('fs');
const inquirer = require('inquirer');
//  questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Please enter your project's title:",
      },

      {
        type: "input",
        name: "Description",
        message: "Please enter a description of your project:",
      },

      {
        type: "input",
        name: "Table of Contents",
        message: "Please enter this README's table of contents:",
      },

      {
        type: "input",
        name: "Installation",
        message: "Please describe your project's installation:",
      },

      {
        type: "input",
        name: "Usage",
        message:"Please describe your project's usage:",
      },

      {
        type: "input",
        name: "License",
        message: "Please enter your project's license:",
      },

      {
        type: "input",
        name: "Contributing",
        message: "Please enter your project's contributions:",
      },

      {
        type: "input",
        name: "Tests",
        message: "Please describe your project's tests:",
      },

      {
        type: "input",
        name: "Questions",
        message: "Please describe your project's questions:" ,
      }



    
];

//Func to write to file
function writeToFile(fileName, data) {

    //setup README file structure
    const content = `
    # ${data.Title}

    ## Description

    ${data.Description}

    ## Table of Contents

    ${data['Table of Contents']}

    ## Installation
    
    ${data.Installation}

    ## Usage

    ${data.Usage}

    ## License

    ${data.License}

    ## Contributing

    ${data.Contributing}

    ## Tests

    ${data.Tests}

    ## Questions

    ${data.Questions}

        `;


    //write to file
    fs.writeFile(fileName, content, err => {
        if (err) {
            console.error('Error writing file:', err);
        }else{
            console.log('Answers have been written to README.md');
        }
    });





}

//function to initialize app
function init() {
    inquirer.prompt(questions)
      .then(answers => {
        writeToFile("README.md", answers);
      })
      .catch(error => {
        console.error('Error getting question/answer', error)
      })
};

// Function call to initialize app
init();

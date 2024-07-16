// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',   
    },
   {
    type: 'checkbox',
    name: 'license',
    message: 'Please select a license for this project:',
    choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'ISC', 'None'],
   },
   {
    type: 'input',
    name: 'require',
    message: 'Enter any project dependencies:',
   },
   {
    type: 'input',
    name: 'usage',
    message: 'Enter the used laguages used for this project:',
   },
   {
    type: 'input',
    name: 'creator',
    message: 'Write your GitHub username:',
   },
   {
    type: 'input',
    name: 'name',
    message: 'Enter your full name:',
   },
   {
     type: 'input',
    name: 'email',
    message: 'Enter your email address:',
   },
   
   {
    type: 'input',
    name: 'tests',
    message: 'Enter any tests instructions:',
   },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
         console.log("The README.md is being generated.. Please wait...");
        writeToFile('./dist/README.md', generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();

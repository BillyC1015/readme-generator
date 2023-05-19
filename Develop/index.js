// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
// add the rest of the ## in the readme
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your application"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the primary objective for using this application?"
    },
];

// TODO: Create a function to write README file

//  use this to put info onto page and in preview
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        console.log(data)
        fs.writeFileSync("test1.md",generateMarkdown(data))
    })
 }

// Function call to initialize app
init();

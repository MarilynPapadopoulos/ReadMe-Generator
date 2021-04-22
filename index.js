// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");

//const { fstat } = require("node:fs");
const generateMarkdown= require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's title on GitHub? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your project's title");
                    return false;
                }
            }
        },
        {   
            type: "input",
            name: "description",
            message: "Enter your project's description."
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?"
        },
        {   
            type: "input",
            name: "usage",
            message: "Enter usage instructions for your project."
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license",
            choices: [
                "Apache",
                "MIT",
                "GNU",
                "None"
            ],
        },
        {
            type: "input",
            name: "contributing",
            message: "If you would like contributors, explain the guidelines:"
        },
        {
            type: "input",
            name: "tests",
            message: "Add test here along with examples of how to run them."
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address (Rquired):",
            validate: (usernameInput) => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your email address:");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username (Required):",
            validate: (usernameInput) => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your user name:");
                    return false;
                }
            }
        }
    ])
   
    .then((projectData) => {
        generateMarkdown(projectData);
        writeFile(projectData);
})  
} 

 questions();  

// TODO: Create a function to write README file
const writeFile = projectData => {
    console.log("hello from writeFile", projectData);
    fs.writeFile('./dist/README.md',generateMarkdown(projectData), err => {
        if(err) {
            console.log(err);
        }
        return(projectData);
    })
   

}



// TODO: Create a function to initialize app
//function init( projectData) {
//
//}

// Function call to initialize app
//init();

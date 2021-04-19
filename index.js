// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
//const { fstat } = require("node:fs");
//const writeToFile = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's title? (Required)",
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
            name: "usage",
            message: "What are the steps required to install your project?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license",
            choices: [
                "Apache",
                "MIT",
                "GNU GPL"
            ],
        },
        {
            type: "input",
            name: "contributing",
            message: "If you would like contributors, explain the guidelines"
        },
        {
            type: "input",
            name: "tests",
            message: "Add test here along with examples of how to run them."
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your username (Required)",
            validate: (usernameInput) => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your user name");
                    return false;
                }
            }
        }
    ])
   
    .then((projectData) => {
        console.log(projectData);
        // console.log(projectData.description);
        // console.log(projectData.usage);
        // console.log(projectData.license);
        // console.log(projectData.contributing);
        // console.log(projectData.tests);
        // console.log(projectData.email);
        // console.log(projectData.username);
})  
} 

 questions();  

// TODO: Create a function to write README file
const writeFile = projectData => {
    fs.writeFile('./README.md',projectData, err => {
        if(err) {
            console.log(err);
        }
        return(projectData);
    })

}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

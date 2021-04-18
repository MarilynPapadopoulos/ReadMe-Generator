// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const writeFile = require("./utils/generateMarkdown.js");

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
            type: "checkbox",
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
   
} 
questions()
    .then = (projectData) => {
        console.log(projectData.title);
        console.log(projectData.description);
        console.log(projectData.usage);
        console.log(projectData.license);
        console.log(projectData.contributing);
        console.log(projectData.tests);
        console.log(projectData.email);
        console.log(projectData.username);
}  
   

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {

//}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { stringify } = require("querystring");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// use the inquirer npm package to prompt user for their email, id, and specific information based on their role with the company.
const questions = [
        {
            type: "input",
            name: "enteredName",
            message: "Enter your name: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your e-mail: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID: "
        },
        {
            type: "list",
            name: "jobRole",
            message: "Select your role.",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Not listed"
            ]
        }
    ];


// This function prompts the array of questions
function promptQuestions() {
    return inquirer.prompt(questions);
}

// This function initializes the program
async function init() {
    try {
        console.log ("Function init called");
        const storeData = await promptQuestions().then(answers=>{
        console.log(answers);
        if(answers.jobRole === "Manager") {
            console.log ("This employee's role is a Manager");
            const Manager = new Manager (answers.name, answers.email, answers.id);
        }
        else if (answers.jobRole === "Engineer") {
            console.log ("This employee's  is an Engineer");
            const Engineer = new Engineer (answers.name, answers.email, answers.id);
        }
        else if (answers.jobRole === "Intern") {
            console.log("This employee's  is an Intern");
            const Intern = new Intern (answers.name, answers.email, answers.id);
        }
        else {
            console.log("This employee's role is not listed");
        }
        })
    }
    catch (err){
        return console.log(err);
    }
}

// call to initialize program
init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

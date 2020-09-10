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
const { endianness } = require("os");
// creates an empty array of employees to push to.
const employeeList = [];

// *****To add a manager*****
function addManager() {
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "Enter the Manager's name: "
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Enter the Manager's e-mail: "
    },
    {
        type: "input",
        name: "managerID",
        message: "Enter the Manager's ID: "
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the Manger's phone number"
    }
    ]).then(answers => {
        let manager = new Manager(answers.managerName, answers.managerEmail, answers.managerID, answers.officeNumber);
        employeeList.push(manager);
        createTeam();
    })
}


// *****To add a Engineer*****
function addEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "engineerName",
        message: "Enter the Engineer's name: "
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Enter the Engineer's e-mail: "
    },
    {
        type: "input",
        name: "engineerID",
        message: "Enter the Engineer's ID: "
    },
    {
        type: "input",
        name: "github",
        message: "Enter the Engineer's github username"
    }
    ]).then(answers => {
        let engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerID, answers.github);
        employeeList.push(engineer);
        createTeam();
    })
}

function addIntern() {
    inquirer.prompt([{
        type: "input",
        name: "internName",
        message: "Enter the Intern's name: "
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter the Intern's e-mail: "
    },
    {
        type: "input",
        name: "InternID",
        message: "Enter the Intern's ID: "
    },
    {
        type: "input",
        name: "school",
        message: "Enter the school's name that the Intern is associated with: "
    }
    ]).then(answers => {
        let intern = new Intern(answers.internName, answers.internEmail, answers.InternID, answers.school);
        employeeList.push(intern);
        createTeam();
    })
}

function end(){
    console.log("End.");
}


// This functions prompts user to choose the type of employee they want to add and call the appropriate functions of prompts.
function createTeam() {
    inquirer.prompt([{
        type: "list",
        message: "Choose the employee's job Role",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Done adding employees at this time."
        ],
        name: "jobRole"
    }]).then(answers => {
        if (answers.jobRole === "Manager") {
            addManager();
        }
        else if (answers.jobRole === "Engineer") {
            addEngineer();
        }
        else if (answers.jobRole === "Intern") {
            addIntern();
        }
        else
            return writeHTML(employeeList);
        // switch(answers.jobRole){
        //     case "Engineer":
        //         addEngineer();
        //         break;
        //     default:
        //         buildTeam();
        // }
    })
}

function buildTeam() {
    // if statement checks if there is an exisiting filles prior to writing a the file
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    // call 'render' function and passing an array (employeeList) containing all employee objects
    createTeam();
    // createTeam() initiates prompt to add an employee
}
function writeHTML(){
    console.log(employeeList);
    fs.writeFileSync(outputPath, render(employeeList), "UTF-8");
}

// calling function to write file
buildTeam();


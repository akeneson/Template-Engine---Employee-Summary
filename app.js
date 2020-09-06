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
        buildTeam();
    })
}


// *****To add a Engineer*****
function addEngineer() {
    console.log(employeeList);
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
        buildTeam();
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
        name: "School",
        message: "Enter the school's name that the Intern is associated with: "
    }
    ]).then(answers => {
        let intern = new Intern(answers.internName, answers.internEmail, answers.InternID, answers.school);
        buildTeam();
    })
    console.log(employeeList);

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
            "Not Listed"
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
            end();
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
    fs.writeFileSync(outputPath, render(employeeList), "UTF-8");
    // createTeam() initiates prompt to add an employee
    createTeam();
    console.log(employeeList);
}

// calling function to write file
buildTeam();

// *****************Instructions*****************
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// use the inquirer npm package to prompt user for their email, id, and specific information based on their role with the company.
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

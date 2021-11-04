
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./data/Manager");
const Engineer = require("./data/Engineer");
const Intern = require("./data/Intern");


const OutputDir = path.resolve(__dirname, "output");
const outputPath = path.join(OutputDir, "team.html");

const render = require("./data/htmlRenderer");

// Storing Employee Data
const teamArray = [];

// ----------------------------------
// Questions
// ----------------------------------

// Manager Question:
const managerQuestions = [{
    type: 'input',
    name: 'managerName'
}]



const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the manager of this team, or your name if you are the manager of this team. '
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'What is this managers ID number, enter your ID number if you are the manager of this team'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is this managers Email adress, enter your email adress if you are the manager of this team'
    },

    {
        type: 'input',
        name: 'office',
        message: 'What is this managers office number? if you are the manager of this team, enter your office number'
    },
]

//Engineer Question: 
const engineerQuestions = [
    {
        type: 'input',
        name: 'engiName',
        message: 'Enter the name of this engineer'
    },

    {
        type: 'input',
        name: 'engiID',
        message: 'Enter the ID number for this engineer'
    },

    {
        type: 'input',
        name: 'engiEmail',
        message: 'Enter the email adress for this engineer'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter this engineers GitHub user name'
    },
]

//Intern Question:
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter the name of this intern'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Enter the ID number for this intern',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the email adress for this intern'
    },

    {
        type: 'input',
        name: 'school',
        message: 'What school does this interen attend, if this intern is not currently attending a school enter "N/A" ',
    },
]

//Additional Employee
const additionalEmployee = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Select the type of team member you would like to add next, if you are done select "Done" to generate your team ',
        choices: ['Engineer', 'Intern', 'Done']
    }
]

// ----------------------------------
// FUNCTIONS
// ----------------------------------

//Starting Point: Manager 
function init() {
        //starts with the manager function
        managerPromt();
}


//Promps the selection of employee they're adding 
function next() {
    inquirer.prompt(additionalEmployee).then((response) => {
        
        console.log(response);
        switch (response.nextEmployee) {
            case 'Engineer':
                engineerPromt();
                break;
            case 'Intern':
                internPromt();
                break;
            case 'Done':
                console.log('Creating your team!')
                makeTeam();
        }
    })
}

//function for the manager questions that will be called first when initiated
function managerPromt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let office = response.office;
        // creats an object 
        const manager = new Manager(name, id, email, office);
        //pushes the object to the empty array to be used later 
        
        teamArray.push(manager);
        console.log(teamArray);
        next();
    })
}
//Engineer Promts
function engineerPromt() {
    inquirer.prompt(engineerQuestions).then((response) => {

        let name = response. engiName;
        let id = response.engiID;
        let email = response.engiEmail;
        let github = response.github;

        const engineer = new Engineer (name, id, email, github);

        teamArray.push(engineer);
        console.log(teamArray);
        next();
    })
}

//Intern Promts
function internPromt() {
    inquirer.prompt(internQuestions).then((response) => {

        let name = response. internName;
        let id = response.internID;
        let email = response.internEmail;
        let school = response.school;

        const intern = new Intern (name, id, email, school);

        teamArray.push(intern);
        console.log(teamArray);
        next();
    })
}

//Making the Team
function makeTeam() {
    fs.writeFile(outputPath, render(teamArray), function(err) {
        if (err) { 
            return console.log(err)
        }
    })

}


init();
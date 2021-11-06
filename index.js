const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/renderHTML");

const employees = [];
const newEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What role does the employee play in the organization?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
        validate: validation,
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of the employee?",
        // The users guess must be a number or letter
        validate: validation,
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
        validate: validateEmail,
      },
    ])
    .then(function (data) {
      switch (data.role) {
        case "Manager":
          inquirer
            .prompt({
              type: "input",
              name: "officeNumber",
              message: "What is the manager's office number?",
              validate: validation,
            })
            .then(function (manData) {
              const newManager = new Manager(
                data.name,
                data.id,
                data.email,
                manData.officeNumber
              );
              newManager.role = "Manager";
              employees.push(newManager);
              addEmployee();
            });
          break;
        case "Engineer":
          inquirer
            .prompt({
              type: "input",
              name: "github",
              message: "What is the engineer's Github Username?",
              validate: validation,
            })
            .then(function (engData) {
              const newEngineer = new Engineer(
                data.name,
                data.id,
                data.email,
                engData.github
              );
              newEngineer.role = "Engineer";
              employees.push(newEngineer);
              addEmployee();
            });
          break;
        case "Intern":
          inquirer
            .prompt({
              type: "input",
              name: "school",
              message: "What is the Intern's school?",
              validate: validation,
            })
            .then(function (intData) {
              const newIntern = new Intern(
                data.name,
                data.id,
                data.email,
                intData.school
              );
              newIntern.role = "Intern";
              employees.push(newIntern);
              addEmployee();
            });
          break;
      }
    });
};
// The function to make sure the user email is in right format
function validateEmail(str) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
    return true;
  } else {
    console.log("Not a valid email. Please enter valid email.");
    return false;
  }
}
// The function to make sure every question is answered properly
function validation(str) {
  if (str != "") {
    return true;
  } else {
    console.log("Please answer the question.");
    return false;
  }
}
const addEmployee = () => {
  inquirer
    .prompt({
      type: "confirm",
      name: "addEmployee",
      message: "Would you like to add an employee?",
      validate: validation,
    })
    .then(function (data) {
      if (data.addEmployee) {
        newEmployee();
      } else {
        fs.writeFile(outputPath, render(employees), "utf8", function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("Success!");
        });
      }
    });
};
if (fs.existsSync(OUTPUT_DIR)) {
  console.log("Output Path Exists.");
} else {
  fs.mkdir(OUTPUT_DIR, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully");
  });
}

addEmployee();

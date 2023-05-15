const mysql = require("mysql2");
const inquirer = require("inquirer");
const Navigator = require("./assets/navigator");

const nav = new Navigator();
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    password: "soradonaldgoofy",
    database: "tracker_db",
  },
  console.log(`Connected to tracker_db database.`)
);

function asdf() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update an Employee's Role",
        ],
        message: "What would you like to do?",
      },
    ])
    .then((response) => {
      let action = response.action;
      switch (action) {
        case "View Departments":
          viewDepartment();
          break;
        case "View Roles":
          nav.viewRoles();
          break;
        case "View Employees":
          nav.viewEmployees();
          break;
        case "Add Department":
          nav.addDepartment();
          break;
        case "Add Role":
          nav.addRole();
          break;
        case "Add Employee":
          nav.addEmployee();
          break;
        case "Update an Employee's Role":
          nav.updateEmployee();
          break;

        default:
          break;
      }
    })
    .then((response) => asdf());
}
// View Departments

// View Roles

// View Employees

// Add Department

// Add Role

// Add Employee

// Update Employee Role
asdf();

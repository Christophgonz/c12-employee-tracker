const mysql = require("mysql2");
const inquirer = require("inquirer");

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
        break;
      case "View Roles":
        break;
      case "View Employees":
        break;
      case "Add Department":
        break;
      case "Add Role":
        break;
      case "Add Employee":
        break;
      case "Update an Employee's Role":
        break;

      default:
        break;
    }
  });

// View Departments

// View Roles

// View Employees

// Add Department

// Add Role

// Add Employee

// Update Employee Role

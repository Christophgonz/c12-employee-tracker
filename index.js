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
      let sql;
      switch (action) {
        case "View Departments":
          sql = `SELECT * FROM department`;
          db.query(sql, (err, rows) => {
            console.log("");
            console.table(rows);
          });
          break;
        case "View Roles":
          sql = `SELECT * FROM role`;
          db.query(sql, (err, rows) => {
            console.log("");
            console.table(rows);
          });
          break;
        case "View Employees":
          sql = `SELECT * FROM employee`;
          db.query(sql, (err, rows) => {
            console.log("");
            console.table(rows);
          });
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
    })
    .then((response) => {
      asdf();
    });
}
// View Departments

// View Roles

// View Employees

// Add Department

// Add Role

// Add Employee

// Update Employee Role
asdf();

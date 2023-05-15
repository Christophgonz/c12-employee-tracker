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

function askUser() {
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
          viewDepartment();
          break;
        case "View Roles":
          viewRole();
          break;
        case "View Employees":
          viewEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          break;
        case "Update an Employee's Role":
          break;

        default:
          break;
      }
    });
}

function viewDepartment() {
  sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    console.table(rows);
  });
  setTimeout(() => {
    askUser();
  }, 500);
}

function viewRole() {
  sql = `SELECT * FROM role`;
  db.query(sql, (err, rows) => {
    console.table(rows);
  });
  setTimeout(() => {
    askUser();
  }, 500);
}

function viewEmployee() {
  sql = `SELECT * FROM employee`;
  db.query(sql, (err, rows) => {
    console.table(rows);
  });
  setTimeout(() => {
    askUser();
  }, 500);
}

// Add Department
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "Enter the name of the department",
        type: "input",
      },
    ])
    .then((response) => {
      sql = `INSERT INTO department (name)
      VALUES (?)`;
      const params = [response.name];
      db.query(sql, params, (err, rows) => {
        askUser();
      });
    });
}
// Add Role
function addRole() {
  sql = `SELECT name FROM department`;
  let names = [];
  db.query(sql, (err, rows) => {
    for (let i = 0; i < rows.length; i++) {
      const element = rows[i].name;
      names.push(element);
    }
  });
  inquirer
    .prompt([
      {
        name: "name",
        message: "Enter the name of the role",
        type: "input",
      },
      {
        name: "salary",
        message: "Enter the salary of the role",
        type: "input",
      },
      {
        name: "department",
        message: "Enter the department of the role",
        type: "list",
        choices: names,
      },
    ])
    .then((response) => {
      let deptID;
      console.log(response.department);
      db.query(
        `SELECT id FROM department WHERE name=?`,
        response.department,
        (err, rows) => {
          deptID = rows[0].id;
          sql = `INSERT INTO role (title, salary, department_id)
          VALUES (?,?,?)`;
          const params = [response.name, response.salary, deptID];
          db.query(sql, params, (err, rows) => {
            askUser();
          });
        }
      );
    });
}

// Add Employee

// Update Employee Role
askUser();

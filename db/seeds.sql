INSERT INTO department (name)
VALUES ("Marketing"),
("Sales"),
("Production");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 10000, 3),
("Retail", 10000, 1),
("Supervisor", 10000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ryan", "Reynolds", 1, null),
("Jeff","theBabyShark", 2, 1);
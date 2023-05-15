INSERT INTO department (name)
VALUES ("Test"),
("TEST2"),
("ASdf");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 10000, 3),
("Supervisor", 10000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("a", "b", 001, null),
("c","d",002,1);
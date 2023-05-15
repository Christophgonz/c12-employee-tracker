INSERT INTO department (id,name)
VALUES (1,"Test"),
(2,"TEST2"),
(3,"ASdf");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Manager", 10000, 3),
(002, "Supervisor", 10000, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "a", "b", 001, null),
(3,"c","d",002,1);
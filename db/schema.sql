CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
    id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

### SCHEMA

CREATE DATABASE bugers_db;
USE burgers_db;

CREATE TABLE burger (
    id int AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

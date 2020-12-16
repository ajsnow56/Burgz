### Schema
DROP DATABASE IF EXISTS burgz_db;
CREATE DATABASE burgz_db;
USE burgz_db;

CREATE TABLE burgz
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	ate BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists topics;
DROP TABLE IF EXISTS users; 
DROP TABLE if exists entries;

SET foreign_key_checks = 1;

--
-- Create Tables
--


CREATE TABLE users(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	username VARCHAR(255) NOT NULL, 
	password VARCHAR(255) NOT NULL, 
    UNIQUE (username)
);

CREATE TABLE topics(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    topic VARCHAR(40) not null
    );

CREATE TABLE entries (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hours INT NOT NULL,
    date VARCHAR(255) NOT NULL,
    exercise TINYINT(1) NOT NULL,
    meditation TINYINT(1) NOT NULL,
    user_id INT NOT NULL,
    UNIQUE (date),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    
);
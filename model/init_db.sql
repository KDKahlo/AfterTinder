--
-- Drop Tables if they already exist in the DB
--
-- MySQL won't allow us to delete a table if it has constraints, to avoid breaking the integrity of the DB.
-- SET foreign_key_checks = 0; deactivates constraints, so that we can delete the tables
--
SET foreign_key_checks = 0;
DROP TABLE if exists relationships;
DROP TABLE IF EXISTS users; 
DROP TABLE if exists users_relationships;
--
-- Once the existing tables have been deleted, SET foreign_key_checks = 1; reactivates constraints checks to ensure the integrity of the DB.
--
SET foreign_key_checks = 1;

--
-- Create Tables. Make sure the table with constraints is created after the parent table. Users_relationships must be created AFTER users AND AFTER relationships
--


CREATE TABLE Relationships(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    UNIQUE (code)
);
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    Percentage_Words_of_Affirmation INT NULL,
    Percentage_Quality_Time INT NULL,
    Percentage_Receiving_Gifts INT NULL,
    Percentage_Acts_of_Service INT NULL,
    Percentage_Physical_Touch INT NULL,
    UNIQUE (email)
);
CREATE TABLE users_relationships (
    user_id INT NOT NULL,
    relationship_id INT NOT NULL,
    PRIMARY KEY (user_id, relationship_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (relationship_id) REFERENCES Relationships (id) ON DELETE CASCADE
);




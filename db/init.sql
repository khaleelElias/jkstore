-- Create a table to store user accounts in. 
CREATE TABLE IF NOT EXSISTS accounts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(255) NOT NULL, 
    CONSTRAINT unsernameUnique UNIQUE (username)
);

--Create a table to store stores in.
CREATE TABLE IF NOT EXISTS stores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    
);
a
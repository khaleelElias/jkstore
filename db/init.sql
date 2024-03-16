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
    title VARCHAR(50) NOT NULL,
    url VARCHAR(255) NOT NULL,
    district 
	content TEXT NOT NULL,
	userOfPost VARCHAR(50) NOT NULL,
	dateCreated DATE NOT NULL,
	FOREIGN KEY (club) REFERENCES clubs(name),
	FOREIGN KEY (userOfPost) REFERENCES accounts(username),
	CONSTRAINT titleUnique UNIQUE (title)
);

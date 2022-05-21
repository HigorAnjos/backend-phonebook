CREATE DATABASE IF NOT EXISTS model_phonebook;
USE model_phonebook;
CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(30) NOT NULL,
	user_email VARCHAR(30) NOT NULL,
  user_password VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO user (user_name, user_email)

VALUES ('George', 'george@gmail.com', '1234'),
	('Isaac', 'isaac@gmail.com', '1234'),
	('Frank', 'frank@gmail.com', '1234'),
	('Julio','Julio@gmail.com', '1234');

CREATE TABLE phonebook (
  id INT NOT NULL AUTO_INCREMENT,
  phone_number VARCHAR(30) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES user(id)
);

INSERT INTO phonebook (phone_number, user_id)

VALUES ('+380967891234', 1),
  ('+380967891235', 1),
  ('+380967891236', 1),
  ('+380967891237', 1),
  ('+380967891238', 1),
  ('+380967891239', 1),
  ('+380967891240', 1),
  ('+380967891241', 1),
  ('+380967891242', 1),
  ('+380967891243', 1),
  ('+380967891244', 1),
  ('+380967891245', 1),
  ('+380967891246', 1),
  ('+380967891247', 1),
  ('+380967891248', 1),
  ('+380967891249', 1),
  ('+380967891250', 1),
  ('+380967891251', 1),
  ('+380967891252', 2),
  ('+380967892253', 2),
  ('+380967892254', 2),
  ('+380967892255', 2),
  ('+380967892256', 2),
  ('+380967892257', 2),
  ('+380967892258', 2),
  ('+380967892259', 2),
  ('+380967892260', 2),
  ('+380967891261', 1),
  ('+380967891262', 3),
  ('+380967891263', 3),
  ('+380967891264', 3),
  ('+380967891265', 3),
  ('+380967891266', 3),
  ('+380967891267', 3),
  ('+380967891268', 3),
  ('+380967891269', 3),
  ('+380967891270', 3),
  ('+380967891271', 3),
  ('+553894561234', 4),
  ('+385656416154', 4),

DROP DATABASE IF EXISTS model_phonebook;

CREATE DATABASE model_phonebook;

USE model_phonebook;

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	email VARCHAR(30) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO user (name, email, password)

VALUES ('George', 'george@gmail.com', '$2b$10$ajyRS5vR6nXitR.DDAmNhOmanpq0027XBSJwjdi/i6R2IvTfGQpGm'), -- password:1234
	('Isaac', 'isaac@gmail.com', '$2b$10$AaUxzPF1MCwtshu/h9VJKuJS94bA8dK5KstKlHH/l4XxSgWAirxwm'), -- password:1234
	('Frank', 'frank@gmail.com', '$2b$10$E4xfY.M9HkwYmsTOBaEEjulDlsJZa97sOZNyJOJvBLlb3ZyEGSpxq'), -- password:1234
	('Julio','Julio@gmail.com', '$2b$10$m/D3cWHmEZ9zHMefRw3BHu6zZHft65Vo1fnsyfV1VEnCKTb2dur.C'); -- password:1234

CREATE TABLE phonebook (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  number VARCHAR(30) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES user(id)
);

INSERT INTO phonebook (name, number, user_id)

VALUES ('alguem', '+380967891234', 1),
  ('maria', '+380967891235', 2),
  ('jose', '+380967891236', 3),
  ('joao', '+380967891237', 4),
  ('pablo', '+38094654651', 1),
  ('maria', '+38094654652', 2),
  ('jose', '+38094654653', 3),
  ('joao', '+38094654654', 4),
  ('pablo', '+380967891234', 1),
  ('maria', '+380967891235', 2),
  ('jose', '+380967891236', 3),
  ('joao', '+380967891237', 4),
  ('pablo', '+38094654651', 1),
  ('maria', '+38094654652', 2),
  ('jose', '+38094654653', 3),
  ('joao', '+38094654654', 4),
  ('pablo', '+380967891234', 1),
  ('maria', '+380967891235', 2),
  ('jose', '+380967891236', 3),
  ('joao', '+380967891237', 4),
  ('pablo', '+38094654651', 1),
  ('maria', '+38094654652', 2),
  ('jose', '+38094654653', 3),
  ('joao', '+38094654654', 4),
  ('pablo', '+380967891234', 1),
  ('maria', '+380967891235', 2),
  ('jose', '+380967891236', 3),
  ('joao', '+380967891237', 4),
  ('pablo', '+38094654651', 1),
  ('maria', '+38094654652', 2),
  ('jose', '+38094654653', 3),
  ('joao', '+38094654654', 4),
  ('pablo', '+380967891234', 1),
  ('maria', '+380967891235', 2),
  ('jose', '+380967891236', 3),
  ('joao', '+380967891237', 4);

CREATE DATABASE devhub;
USE devhub;

CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
);

CREATE TABLE lgs(
	id INT PRIMARY KEY AUTO_INCREMENT,
	categoria TEXT,
    horas_trabalhadas INT,
    linhas_codigo INT,
    bugs_corrigidos INT,
    id_user INT,
    FOREIGN KEY (id_user)
    REFERENCES usuario(id)
);

CREATE TABLE `comment`(
    id INT PRIMARY KEY AUTO_INCREMENT,
    message VARCHAR(255),
	id_log INT,
    FOREIGN KEY (id_log)
    REFERENCES lgs(id),
    
    id_user INT,
    FOREIGN KEY (id_user)
    REFERENCES usuario(id)
);

CREATE TABLE `like`(
id INT PRIMARY KEY AUTO_INCREMENT,

    id_log INT,
    FOREIGN KEY (id_log)
    REFERENCES lgs(id),
    
    id_user INT,
    FOREIGN KEY (id_user)
    REFERENCES usuario(id)
);
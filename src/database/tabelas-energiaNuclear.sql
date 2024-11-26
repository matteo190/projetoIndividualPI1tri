create database energiaNuclear;
use energiaNuclear;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
create table grafico(
	idgrafico int primary key auto_increment,
	energia double,
	fkusuario int,
	constraint fkgraficoUsuario foreign key (fkusuario)
	references usuario(id)
);
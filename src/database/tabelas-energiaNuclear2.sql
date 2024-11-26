use energiaNuclear;
select*from usuario;

create table grafico(
idgrafico int primary key auto_increment,
energia double,
fkusuario int,
constraint fkgraficoUsuario foreign key (fkusuario)
references usuario(id)
); 

select*from grafico;
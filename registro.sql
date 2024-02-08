drop database if exists Registro;
create database Registro;

use registro;

create table usuario(
    id int auto_increment,
    nombre varchar(50) unique,
    contraseña varchar(50),
    primary key(id)
);

insert into usuario(nombre, contraseña) values ("Pepe", "jope33");
insert into usuario(nombre, contraseña) values ("Marta", "laTarta");
insert into usuario(nombre, contraseña) values ("Helena", "hell666");
insert into usuario(nombre, contraseña) values ("Manolo", "manolin");
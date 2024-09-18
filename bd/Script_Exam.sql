CREATE DATABASE bd_videojuegos;
USE bd_videojuegos;
CREATE TABLE videogame (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (50),
description LONGTEXT,
release_date DATE,
score INT);

INSERT INTO videogame (name, description, release_date, score)
VALUES ( 
"Zelda",
"Un videojuego de aventuras, en el que nuestro heroe lucha constras las fuerzas del mal",
"1985-05-10",
4.8/5);

INSERT INTO videogame (name, description, release_date, score)
VALUES ( 
"Grandia",
"Un joven se embarca en una aventura inesperada, descubriendo los misterios de una antigua civilización",
"200-01-05",
4.9/5);

INSERT INTO videogame (name, description, release_date, score)
VALUES ( 
"Yumme nikki",
"Una joven encerrada en su cuarto se sumerge en sus extraños sueños",
"204-06-20",
4.9/5);

INSERT INTO videogame (name, description, release_date, score)
VALUES ( 
"Danganronpa",
"Despierto en una exrtraña escuela, con gente aún más extraña ¿Qué está pasando?¿Porqué estamos encerrados? Parece que la única solución para salir de aquí es el asesinato...",
"204-06-20",
4.8/5);

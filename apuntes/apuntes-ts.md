# Titulo

traer csv de movies a la carpeta del servidor

iniciamos la db con el schema.sql

luego `sqlite3 movies.db`

> .mode csv 
> .import movies.csv temp
> select * from movies;
> select * from temp LIMIT 10;
> INSERT INTO peliculas (title, genres ) SELECT title, genres FROM temp;

luego `sqlite3 movies.db ".dump" > dump.sql`

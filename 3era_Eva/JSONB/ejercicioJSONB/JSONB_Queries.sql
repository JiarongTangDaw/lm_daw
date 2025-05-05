-- 1. Creación e insert de la tabla y los registros
CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	preferencias JSONB NULL
);

INSERT INTO usuarios (nombre,preferencias) VALUES
(
	'Jiarong',
	'{
		"idioma": "chino",
		"tema": "oscuro",
		"notificaciones": false
	}'
),
(
	'Carlos',
	'{
		"idioma": "español",
		"tema": "claro",
		"notificaciones": true
	}'
),
(
	'Luisa',
	'{
		"idioma": "ingles",
		"tema": "claro",
		"notificaciones": false
	}'
);

-- 2. Select de usuarios con el nombre y su tema

SELECT nombre, preferencias ->> 'tema' as tema
FROM usuarios
;

-- 3. Buscar usuarios que tengan activadas las notificaciones.

SELECT * FROM usuarios
WHERE preferencias @> '{"notificaciones": true}'
;

-- 4. Actualizar el tema de un usuario a "oscuro".

UPDATE usuarios
SET
	preferencias = jsonb_set(preferencias,'{tema}','"oscuro"')
WHERE preferencias @> '{"notificaciones": true}'
;

SELECT * FROM usuarios;

-- 5. Añadir un nuevo campo 'newsletter' a todos los usuarios con valor false.

UPDATE usuarios
SET
	preferencias = jsonb_set(preferencias,'{newsletter}','false')
;

SELECT * FROM usuarios;
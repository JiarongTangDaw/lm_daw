/*
	Filtrar todos los registros por solo los que
	tengan una clave en concreto dentro del campo jsonb
*/

SELECT *
	FROM public.productos
WHERE caracteristicas ? 'stock'
;
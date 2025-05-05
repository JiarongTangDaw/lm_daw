-- recupera todas las claves de un campo JSONB mediante la funcion jsonb
SELECT distinct(jsonb_object_keys(caracteristicas))
FROM public.productos
;
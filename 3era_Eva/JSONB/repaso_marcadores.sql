-- seleccionamos ele nombre, el valor de las claves marca y color (pertenecientes a caracteristicas)
-- todos los registros que tenga el valor 'Levis' en su clave marca dentro del 
-- campo JSONB de caracteristicas
SELECT nombre,caracteristicas ->> 'marca' as marca, caracteristicas ->> 'color' as color
FROM public.productos
WHERE caracteristicas ->> 'marca' = 'Levis'
;
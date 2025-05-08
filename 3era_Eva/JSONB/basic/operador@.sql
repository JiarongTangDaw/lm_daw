-- alternativa al operador "->>" pero solo se puede usar
-- en where
SELECT nombre,caracteristicas ->> 'marca' as marca, caracteristicas ->> 'color' as color
FROM public.productos
-- WHERE caracteristicas ->> 'marca' = 'Levis'
WHERE caracteristicas @> '{"marca":"Fast Fish"}'
;

-- saca todos los productos que tenga el valor 'Rojo' de la clave 'color' con el operador '->>'
-- saca todo los productos que tenga el valor 'Azul' de la clave 'color' con el operador '@> '{"clave":"valor"}''
SELECT id, nombre, caracteristicas ->> 'marca' as marca, caracteristicas ->> 'color' as color
	FROM public.productos
-- WHERE caracteristicas ->> 'color' = 'Rojo'
WHERE caracteristicas @> '{"color":"Azul"}'
;
-- actualiza todos los productos que tenga como valor 'Rojo' de la clave 'color'  
-- para que el valor de su clave 'cantidad' sea igual a 5

UPDATE productos
SET
	caracteristicas = jsonb_set(caracteristicas, '{cantidad}','5')
WHERE caracteristicas @> '{"color":"Rojo"}'
;

-- actualizar una clave que no existe
-- se añade a la estructura jsonb

-- actualiza todos los productos que tenga como valor 'Rojo' de la clave 'color' para 
-- que el valor de su clave 'cantidad' sea igual a 5

UPDATE productos
SET
	caracteristicas = jsonb_set(caracteristicas, '{stock}','10')
WHERE caracteristicas @> '{"color":"Rojo"}'
;

select * from productos;
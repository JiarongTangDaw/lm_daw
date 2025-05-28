/*
    const nuevoArray = arryOriginal.map((elemento, indice, array) => {
        // elemento es obligatorio
        //inidce y array con opciones

        //logica de transformacion
        return elementoTransformado;
    });
*/

const numeros = [1,2,3,4]

// multiplicar por 2 cada uno de los numeross en un nuevo array usando .map

const newNumeros = numeros.map((numero) => {
    return numero * 2;
});

console.log("Array original: ", numeros);
console.log("Array nuevo: ", newNumeros);

// devolver un array con todos los nombres en mayusculas

console.log("-----------------------------------------------");

const nombres = ["Valerion", "Johanien", "Pedron", "Sharik"];

const newNombres = nombres.map((nombre) => {
    return nombre.toUpperCase();
})

console.log("Array original: ", nombres);
console.log("Array nuevo: ", newNombres);

const productos = [
    {
        producto: "Laptop",
        precio: 250
    },
    {
        producto: "Tablet",
        precio: 75
    },
    {
        producto: "Mochila",
        precio: 50
    }
];

console.log("-----------------------------------------------");

// devuelve un array nuevo con todos los precios de los objetos con un 10% de descuento

const newProductos = productos.map((produc) => {
    return {
        producto: produc.producto,
        precio: produc.precio * 0.9
    };
})

console.log("Array original: ", productos);
console.log("Array nuevo: ", newProductos);

console.log("-----------------------------------------------");

const etiquetaProducto = newProductos.map((produc) => {
    return `${produc.producto} : ${produc.precio}`;
})

console.log("Array original: ", newProductos);
console.log("Array nuevo: ", etiquetaProducto);

console.log("-----------------------------------------------");


const producDescuento = productos.map((produc) => {
    const {producto,precio} = produc;
    return {producto: producto, precio: precio * 0.9};
})

console.log("Array original: ", productos);
console.log("Array nuevo: ", producDescuento);

console.log("-----------------------------------------------");

const usuarios = [
    {
        firstName: "Pepito",
        lastName: "Perez",
        age: 33,
        active: true
    },
    {
        firstName: "Ana",
        lastName: "Perez",
        age: 28,
        active: true
    },
    {
        firstName: "Maria",
        lastName: "Lopez",
        age: 17,
        active: false
    }
];

/* devolver un array nuevo que tengo esta estructura
    {
        id: indice_firstName_lastName,
        fullName: firstName lastName,
        isAdult: true o false dependiendo de la edad
        status: 'Active' o 'Inactive' dependiendo del campo active
    }
*/

const newUsuarios = usuarios.map((usuario,index) => {
    const{firstName,lastName,age,active} = usuario;
    return {
        id: `${index}_${firstName}_${lastName}`,
        fullName: `${firstName} ${lastName}`,
        isAdult: (age >= 18) ? true : false,
        status: active? 'Active' : 'Inactive'
    }
})

console.log("Array original: ", usuarios);
console.log("Array nuevo: ", newUsuarios);


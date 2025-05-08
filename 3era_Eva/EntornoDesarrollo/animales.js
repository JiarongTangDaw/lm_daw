/*
    3 clases: Animal(nombre,hablar()), Gato(),Perro()
*/

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hablar(){
        console.log(`El ${nombre} habla`);        
    }
}

class Gato extends Animal{
    constructor(nombre){
        super(nombre);
    }

    hablar(){
        console.log(`El gato ${this.nombre} dice miauu`);        
    }
}

class Perro extends Animal{
    constructor(nombre){
        super(nombre);
    }

    hablar(){
        console.log(`El perro ${this.nombre} dice guauuu`)
    }
}
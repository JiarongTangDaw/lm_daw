class Persona{
    constructor(nombre,pais,edad){
        this.nombre = nombre;
        this.pais = pais;
        this.edad = edad;
    }

    mostarDetalles(){
        console.log(`Hola, mi nombre es ${this.nombre}, soy de ${this.pais} y tengo ${this.edad} años`);        
    }
}

class Conductor extends Persona{
    constructor(nombre,pais,edad,licencia){
        super(nombre,pais,edad);
        this.licencia = licencia;

        this.vehiculos = [];
    }

    addVehiculo(vehiculo){
        this.vehiculos.push(vehiculo);
    }

    mostarDetalles(){
        console.log(`Hola, mi nombre es ${this.nombre}, soy de ${this.pais}, tengo ${this.edad} años y tengo licencia ${this.licencia}`);        
    }
}

class Vehiculo{
    constructor(marca,modelo,anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    mostarDetalles(){
        console.log(`${this.marca} - ${this.modelo} - ${this.anio}`);        
    }
}
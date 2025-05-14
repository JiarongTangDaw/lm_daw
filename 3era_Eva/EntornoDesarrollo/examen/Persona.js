class Persona{
    constructor(nombre,dni,edad,colorCabello){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.colorCabello = colorCabello;
    }

    camina(distancia){
        console.log(`${this.nombre} ha caminado ${distancia} metros`);
    }

    come(comida){
        console.log(`${this.nombre} ha comido ${comida}`);
    }

    habla(idioma){
        console.log(`${this.nombre} habla ${idioma}`);
    }
}

class Estudiante extends Persona{
    constructor(nombre,dni,edad,colorCabello){
        super(nombre,dni,edad,colorCabello);
    }

    estudia(materia){
        console.log(`El estudiante  ${this.nombre} esta estudiando ${materia}`);
    }
}

class Profesor extends Persona{
    constructor(nombre,dni,edad,colorCabello){
        super(nombre,dni,edad,colorCabello);
    }

    ensenia(materia){
        console.log(`El profesor ${this.nombre} enseña ${materia}`);
    }
}

const estudiante = new Estudiante("Lucas","123456789K",20,"Rubio");
estudiante.camina(50);
estudiante.come("macarrones");
estudiante.habla("francés");
estudiante.estudia("química");

const profesor = new Profesor("Mario","987654321L",36,"Castaño");
profesor.camina(90);
profesor.come("hamburguesa");
profesor.habla("italiano");
profesor.ensenia("química");
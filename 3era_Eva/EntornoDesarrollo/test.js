class Usuario{
    constructor(nombre,correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const user = new Usuario('Jia', 'jia@gmail.com');
user.saludar();
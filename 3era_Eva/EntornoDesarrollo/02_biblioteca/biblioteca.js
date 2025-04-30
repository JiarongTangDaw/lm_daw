/*
    crear 3 clase en js:
    + Libro:
        - ISBN
        - titulo
        - autor
        - prestar()
        - devolver()
    + Usuario:
        - id
        - nombre
        - solicitarLibro()
        - devolverLibro()
    + Bibliotecario
        - turno
        - registrarLibro()
*/

class Libro{
    constructor(isbn,titulo,autor){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
    }

    prestar(){
        console.log(`El libro ${this.titulo} ha sido prestado`);        
    }

    devolver(){
        console.log(`El libro ${this.titulo} ha sido devuelto`);
    }
}

class Usuario{
    constructor(id,nombre){
        this.id = id;
        this.nombre = nombre;
    }

    solicitarLibro(libro){
        console.log(`El usuario con id ${this.id} y nombre ${this.nombre} ha solicitado el libro ${libro.titulo}`);
    }

    devolverLibro(libro){
        console.log(`El usuario con id ${this.id} y nombre ${this.nombre} ha devuelto el libro ${libro.titulo}`);
    }
}

class Bibliotecario{
    constructor(turno){
        this.turno = turno;
    }

    registraLibro(isbn,titulo,autor){
        console.log(`Se añadio el libro${titulo} (ISBN: ${isbn}, autor: ${autor})`);
        
    }
}

const user = new Usuario(1,'John');
const book = new Libro('123456','Blacksad','Michael Turturo');
const bookKeeper = new Bibliotecario('mañana');

user.solicitarLibro(book);
user.devolverLibro(book);

bookKeeper.registraLibro('98765431','Maus','John Doe');
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [
            {
                nombre: libros.nombre,
                autor: libros.autor,
            },
        ];
        this.mascotas = [mascotas];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombre) {
        this.mascotas = [...this.mascotas, nombre];
    }

    countMascota() {
        return this.mascotas.length;
    }

    addBook(libro) {
        this.libros = [
            ...this.libros,
            { nombre: libro.nombre, autor: libro.autor },
        ];
    }

    getBookNames() {
        let books = [];
        this.libros.map((libro) => {
            return (books = [...books, libro.nombre]);
        });
        console.log(`Los Titulos de libros que posee son :`);
        console.log(books);
    }
}

const Usuario1 = new Usuario(
    "Pablo",
    "Frank",
    { nombre: "Harry Potter", autor: "J.K.Rowling" },
    "Sif"
);

Usuario1.addMascota("Guts");
Usuario1.addBook({ nombre: "Metro 2033", autor: "Dimitry Glukhovsky" });

console.log(`El nombre completo del Usuario es : ${Usuario1.getFullName()}`);
console.log(
    `La cantidad de mascotas que posee es : ${Usuario1.countMascota()}`
);
Usuario1.getBookNames();

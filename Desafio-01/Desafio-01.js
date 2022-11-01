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
        return this.libros.map((libro) => {
            return libro.nombre;
        });
    }
}

const Usuario1 = new Usuario(
    "Pablo",
    "Frank",
    { nombre: "Harry Potter", autor: "J.K.Rowling" },
    "Sif"
);

const Usuario2 = new Usuario(
    "Prueba",
    "Prueba",
    { nombre: "Prueba Prueba", autor: "Prueba Prueba" },
    "Prueba"
);

Usuario1.addMascota("Guts");
Usuario1.addBook({ nombre: "Metro 2033", autor: "Dimitry Glukhovsky" });

console.log(`El nombre completo del Usuario es : ${Usuario1.getFullName()}`);
console.log(
    `La cantidad de mascotas que posee es : ${Usuario1.countMascota()}`
);
console.log(`Los Titulos de libros que posee son : ${Usuario1.getBookNames()}`);

console.log(`El nombre completo del Usuario es : ${Usuario2.getFullName()}`);
console.log(
    `La cantidad de mascotas que posee es : ${Usuario2.countMascota()}`
);
console.log(`Los Titulos de libros que posee son : ${Usuario2.getBookNames()}`);

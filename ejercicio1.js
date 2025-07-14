// Ejercicio 1 Crear un objeto Libro con un método para prestar el libro
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;
}

Libro.prototype.prestar = function () {
  if (!this.prestado) {
    this.prestado = true;
    console.log(`El libro "${this.titulo}" ha sido prestado.`);
  } else {
    console.error(`Error: El libro "${this.titulo}" ya está prestado.`);
  }
};

//  Pruebas
console.log("--- Ejercicio 1: Libro ---");
const miLibro = new Libro("Cien Años de Soledad", "Gabriel García Márquez");

// 1. Primer intento de préstamo (debería funcionar)
miLibro.prestar();

// 2. Segundo intento de préstamo (debería mostrar error)
miLibro.prestar();

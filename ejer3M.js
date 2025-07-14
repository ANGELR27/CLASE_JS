// Ejercicio 1 Crear un objeto Libro con un método para prestar el libro
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false; // Por defecto, el libro no está prestado
}

/**
 * Método para prestar el libro.
 * Cambia el estado de 'prestado' a true si está disponible.
 */
Libro.prototype.prestar = function () {
  if (!this.prestado) {
    this.prestado = true;
    console.log(`El libro "${this.titulo}" ha sido prestado.`);
  } else {
    console.error(`Error: El libro "${this.titulo}" ya está prestado.`);
  }
};

// --- Pruebas ---
console.log("--- Ejercicio 1: Libro ---");
const miLibro = new Libro("Cien Años de Soledad", "Gabriel García Márquez");

// 1. Primer intento de préstamo (debería funcionar)
miLibro.prestar();

// 2. Segundo intento de préstamo (debería mostrar error)
miLibro.prestar();

/**
 * Constructor para crear una lista de compras.
 */
function ListaCompras() {
  this.productos = []; // Inicializa una lista vacía
}

/**
 * Agrega un producto a la lista.
 * @param {string} producto - El nombre del producto a agregar.
 */
ListaCompras.prototype.agregar = function (producto) {
  this.productos.push(producto);
  console.log(`"${producto}" ha sido agregado a la lista.`);
};

/**
 * Muestra todos los productos de la lista, numerados.
 */
ListaCompras.prototype.mostrar = function () {
  console.log("\nLista de Compras:");
  if (this.productos.length === 0) {
    console.log("La lista está vacía.");
    return;
  }
  // Bucle 'for' para recorrer y mostrar los productos
  for (let i = 0; i < this.productos.length; i++) {
    console.log(`${i + 1}. ${this.productos[i]}`);
  }
};

// --- Pruebas ---
console.log("\n--- Ejercicio 2: Lista de Compras ---");
const miLista = new ListaCompras();

// Agregamos 3 productos
miLista.agregar("Manzanas");
miLista.agregar("Leche");
miLista.agregar("Pan");

// Mostramos la lista completa
miLista.mostrar();

/**
 * Constructor para el reproductor de música.
 */
function Reproductor() {
  this.estado = "detenido"; // Estado inicial
}

/**
 * Inicia la reproducción de la música.
 */
Reproductor.prototype.play = function () {
  if (this.estado === "detenido" || this.estado === "pausado") {
    this.estado = "reproduciendo";
    console.log("▶️ Reproduciendo música...");
  } else {
    console.log("⚠️ Ya se está reproduciendo música.");
  }
};

/**
 * Pausa la música que se está reproduciendo.
 */
Reproductor.prototype.pausar = function () {
  if (this.estado === "reproduciendo") {
    this.estado = "pausado";
    console.log("⏸️ Música pausada.");
  } else {
    console.log("⚠️ No hay música reproduciéndose.");
  }
};

// Detiene la reproducción de la música.

Reproductor.prototype.detener = function () {
  this.estado = "detenido";
  console.log("⏹️ Música detenida.");
};

// --- Pruebas ---
console.log("\n--- Ejercicio 3: Reproductor de Música ---");
const miReproductor = new Reproductor();

miReproductor.play(); // Inicia la reproducción
miReproductor.pausar(); // Pausa la música
miReproductor.play(); // Reanuda la reproducción
miReproductor.detener(); // Detiene por completo
miReproductor.pausar(); // Intenta pausar cuando no hay nada (error)

/**
 * Constructor para el carrito de compras.
 */
function Carrito() {
  this.productos = [];
  this.total = 0;
}

/**
 * Agrega un producto al carrito y actualiza el total.
 * @param {string} nombre - Nombre del producto.
 * @param {number} precio - Precio del producto.
 */
Carrito.prototype.agregarProducto = function (nombre, precio) {
  this.productos.push({ nombre, precio });
  this.total += precio;
  console.log(
    `"${nombre}" ($${precio}) fue agregado. Total actual: $${this.total.toFixed(
      2
    )}`
  );
};

/**
 * Calcula y muestra el total con el descuento aplicable.
 */
Carrito.prototype.calcularDescuento = function () {
  let descuento = 0;
  let totalConDescuento = this.total;

  console.log(`\n--- Calculando Total ---`);
  console.log(`Subtotal: $${this.total.toFixed(2)}`);

  if (this.total > 100) {
    descuento = this.total * 0.1; // 10% de descuento
    totalConDescuento = this.total - descuento;
    console.log(`Descuento aplicado (10%): $${descuento.toFixed(2)}`);
  } else if (this.total > 50) {
    descuento = this.total * 0.05; // 5% de descuento
    totalConDescuento = this.total - descuento;
    console.log(`Descuento aplicado (5%): $${descuento.toFixed(2)}`);
  } else {
    console.log("No aplica descuento.");
  }

  console.log(`Total a pagar: $${totalConDescuento.toFixed(2)}`);
};

// --- Pruebas ---
console.log("\n--- Ejercicio 4: Carrito de Compras ---");
const miCarrito = new Carrito();

// Caso 1: Total menor a $50
miCarrito.agregarProducto("Café", 25);
miCarrito.calcularDescuento();

// Caso 2: Total mayor a $50
miCarrito.agregarProducto("Libro de JS", 40);
miCarrito.calcularDescuento();

// Caso 3: Total mayor a $100
miCarrito.agregarProducto("Teclado", 80);
miCarrito.calcularDescuento();

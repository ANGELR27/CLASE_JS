// Ejercicio 2 Crear una lista de compras con un método para agregar productos
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

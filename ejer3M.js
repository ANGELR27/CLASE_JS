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

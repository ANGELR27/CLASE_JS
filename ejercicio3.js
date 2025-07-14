Reproductor.prototype.play = function () {
  if (this.estado === "detenido" || this.estado === "pausado") {
    this.estado = "reproduciendo";
    console.log("▶️ Reproduciendo música...");
  } else {
    console.log("⚠️ Ya se está reproduciendo música.");
  }
};

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

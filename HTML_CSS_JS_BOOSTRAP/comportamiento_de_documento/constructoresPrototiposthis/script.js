/**
 * @title CONSTRUCTORES
 */

function circulos(radio) {
    this.radio = radio;
    this.diametro = radio*2;
}

circulos.prototype.obtenerArea = function () {
    return Math.PI * Math.pow(this.radio, 2);
}

circulos.prototype.obtenerPerimetro = function () {
    return Math.PI * this.diametro;
}

const miCirculo = new circulos(10); // NUEVO OBJETO
let miOtroCirculo = new circulos(32);

console.log(miCirculo);
console.log("Área del círculo: " + miCirculo.obtenerArea() + "\nPerímetro: " + miCirculo.obtenerPerimetro()); // Impresión de resultados
console.log(miOtroCirculo);
console.log("Área del círculo: " + miOtroCirculo.obtenerArea() + "\nPerímetro: " + miOtroCirculo.obtenerPerimetro()); // Impresión de resultados
function test() {
    console.clear();
    console.log(this);                  // Aquí se está imprimiendo el objeto global que es el sistema operativo de windows.
    this.myName = "Diego el guapo";     // Le asignamos una propiedad nueva: 'myNmae'
}


/**
 * @brief función principal
 */

function main() {
    test();
    console.log(this.myName);
    console.clear();
}

/** EJECUCIÓN DE FUNCIONES -------
 *                               |
 *                               |
 *                               |
 *                               V    */

main();




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
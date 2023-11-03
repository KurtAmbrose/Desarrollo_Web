/** ----------- OBJETOS LITERALES Y MÁS USOS DE THIS -------------------- */

let poligonoLiteral = {
    apotema: 20,
    lado: 11.7,
    obtenerArea: function () {
        let self = this;
        console.log(this);      // This deja de apuntar al objeto 'window' y pasa a apuntar al objeto 'poligonoLiteral'
        let incrementarApotema = function () {
            self.apotema=40;
        };
        incrementarApotema();
        console.log(this.apotema);
        return (this.lado*7*this.apotema)/2;
    }
};

console.clear();
console.log("\nResultado del área: " + poligonoLiteral.obtenerArea() + "\n");
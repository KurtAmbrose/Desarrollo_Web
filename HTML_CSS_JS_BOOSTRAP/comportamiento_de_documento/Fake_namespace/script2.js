(function (window) {
    const john = {};
    let saludo = "Adiós ";
    john.nombre = "John-117";
    john.dileAdios = function () {
        console.log(saludo + john.nombre);
    }
    window.john = john;
})(window);
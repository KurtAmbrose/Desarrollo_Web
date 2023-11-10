(function (window) {
    const kurt = {};
    let saludo = "Hola ";
    kurt.nombre = "Kurt-051";
    kurt.dileHola = function () {
        console.log(saludo + kurt.nombre);
    }
    window.kurt = kurt;
})(window);
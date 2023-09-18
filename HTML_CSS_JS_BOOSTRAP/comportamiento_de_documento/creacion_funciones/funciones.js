/** ---------------------- CREACIÓN DE FUNCIONES (repaso) ---------------------- */

function multiplicar(x, y) {
    let resultado;

    resultado = x * y;

    return resultado;
}

multiplicar.version = "v.1.0.0";

/** ---------------------- Fábrica de funciones ---------------------- */

function makeMultiplier(multiplo) {
    let miFunc;
    miFunc = function (x) {
        multiplo = multiplo * x;
        return multiplo;
    };

    return miFunc;
}

/** ---------------------- Pasar funciones como argumentos ---------------------- */

function hacerOperacionEn (x, operacion) {
    return operacion(x);
}

/** ---------------------- Función principal ---------------------- */

function main() {
    let res, res2;
    let multiplicadoPor3;
    let duplicar;

    res = multiplicar(5,3);
    console.clear();
    console.log("\n\nEl resultado de la multiplicación es este ---> " + res + ".\n");

    console.log(multiplicar.toString()); // MUESTRA EN LA CONSOLA TODO EL PROCEDIMIENTO QUE HACE LA FUNCIÓN MULTIPLICAR, YA QUE INTERPRETA LA FUNCIÓN COMO UN OBJETO. 
    console.log(multiplicar); // AQUIÍ MUESTRA EL NOMBRE DE LA FUNCIÓN Y LA VERSIÓN DE ESTA MISMA, SIENDO 'v.1.0.0'
    console.log("\n");

    multiplicadoPor3 = makeMultiplier(3);
    console.log(multiplicadoPor3(10));

    duplicar = makeMultiplier(2);
    console.log(duplicar(100));
    console.log("\n");
}

/** -----EJECUCIÓN DE LA FUNCIÓN MAIN |
 *                                    |
 *                                    |
 *                                    V  */

main();
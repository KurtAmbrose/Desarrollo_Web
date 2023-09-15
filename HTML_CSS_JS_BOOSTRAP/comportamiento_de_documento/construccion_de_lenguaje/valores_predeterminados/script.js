/**------------------------Valores predeterminados----------------------- */

function ordenarPolloCon(ingrediente) {

    ingrediente = ingrediente || "lo de siempre xd";

    console.log("El pollo fue pedidio con el siguiente ingrediente ---> " + ingrediente + ".\n\n");
}

function ordenarPapas(condimento) {
    condimento = condimento || "valentina";
    console.log("Las papas llevas " + condimento + " siempre >:]\n\n");
}


/** ---------- FUNCIÓN MAIN --------------- */

function main () {

    let ing;
    ing = "pata";

    console.clear();
    console.log("\n\n----------VALORES PREDETERMINADOS------------\n\n");
    ordenarPolloCon("Mollejas y res");
    ordenarPolloCon();
    ordenarPapas();
    ordenarPapas(ing);
    ordenarPapas("chamoy");
}

/** EJECUCIÓN DE FUNCIONES -------
 *                               |
 *                               |
 *                               |
 *                               V    */

main();
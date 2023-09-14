var mensaje = "soy una variable global de tipo string :D.\n";

var b = function () {
    console.log("\nEl mensaje de ahora que está adentro de la función 'b' (que fue mandada a llamar dentro de la función 'a') es este:\n\t---> " + mensaje);
    var c = function () {
        var mensaje = "Buen día, soy otra función nwn que está dentro de la función 'b'.";
        console.log("\nY el último mensaje es este:\n\t----> " + mensaje);
    }
    c();
}

var a = function () {
    var mensaje = "Soy una variable que existe en la función 'a' uwu.";
    console.log("Ahora veamos otro mensaje:\n\tLa función a suelta el siguiente mensaje: " + mensaje);
    b();
}


console.clear();
console.log("\t-----ACÁ ABAJO ESTÁ EL MENSAJE XD.--------\n");
console.log("mensaje global = " + mensaje);
a();


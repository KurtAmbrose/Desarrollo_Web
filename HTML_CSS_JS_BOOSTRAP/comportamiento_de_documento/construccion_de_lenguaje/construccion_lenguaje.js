function ejemplo_concatenar_strings() {
    var string = "\n\n\nHola :],";
    var string2 = "\n\n\nBuenas xd";
    string += " soy el ejemplo de concatenar strings uwu"; //SE PUEDEN CONCATENAR STRINGS EN JS SIMPLEMENTE SUMANDOLAS !!!!
    string2 = " yo si que cambié :v";

    console.clear();
    console.log(string + "!\n\n\n" + string2 + "!\n\n");

    //RESULTADO: Hola :] ya cambié xd!.
    //se le suma el valor original del string con el segundo asignado, posteriormente se le agrega elñ "!" ya que así se le pidió a la consola que lo imprimiera.
}

function prueba (a) {
    console.log("\n\nEjemplo de la función que se manda a llamar con parametros dentro de la función de 'operadores_matemáticos' que es a/5 ---> " + a/5 + "\n\n");
}

function ejemplo_operadores_matematicos() {
    var num = 2;
    var num2 = 3;
    var num3 = 3.1416;
    var num4 = 2.7182;

    console.log("\n\n------OPERADORES MATEMÁTICOS--------\n\n");
    console.log("\nEjemplo de la operación (2+3)/3 ---> " + (num + num2)/num2 + "\n\n");
    console.log("\n\nEjemplo de la operación undifine/3.1416 ---> " + undefined/num3 + "\n\n");
    prueba(num4);
    console.log("\n\nEjemplo de la operación (2+3)(3.1416*2.7182) ---> " + (num + num2)*(num3*num4) + "\n\n");
}

function ejemplo_comparacion(){
    var x,y;
    x=6;
    y=0.79;

    console.log("\n\n------ COMPARACIÓN --------\n\n");

    if(x==y)
    {
        console.log("\nLas variables 'x' y 'y' son iguales!\nY su valor es " + x + "\n\n");
    } else {
        console.log("\nLas variables 'x' y 'y' no son iguales :(\n\n");
    }

    y=6;

    if(x==y)
    {
        console.log("\nAhora sí son iguales xD.\nSu valor es " + y + "\n\n");
    }
}

function ejemplo_comparacion_strings() {
    var a,b,z,u;
    a="buebos";
    b="buebos";
    z="hola";
    u="adios";

    console.log("\n\n------ COMPARACIÓN DE STRINGS --------\n\n");

    if(a===b)
    {
        console.log("\nLas variables 'a' y 'b' strings son iguales!\nY su valor es '" + a + "'\n\n");
    }
    else
    {
        console.log("\nLas variables 'a' y 'b' strings no son iguales :>.\n\n");
    }
    if(z===u)
    {
        console.log("\nLas variables 'z' y 'u' strings son iguales!\nY su valor es '" + u + "'\n\n");
    }
    else
    {
        console.log("\nLas variables 'z' y 'u' strings no son iguales :>.\n\n");
    }

    
}


/** ---------- FUNCIÓN MAIN --------------- */

function main () {
    ejemplo_concatenar_strings();
    ejemplo_operadores_matematicos();
    ejemplo_comparacion();
    ejemplo_comparacion_strings();
}

/** EJECUCIÓN DE FUNCIONES -------
 *                               |
 *                               |
 *                               |
 *                               V    */

main();

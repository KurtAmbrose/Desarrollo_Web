function ejemplo_concatenar_strings() {

    console.log("\n\n------CONCATENAR STRINGS--------\n\n");

    let string = "\n\n\nHola :],";
    let string2 = "\n\n\nBuenas xd";
    string += " soy el ejemplo de concatenar strings uwu"; //SE PUEDEN CONCATENAR STRINGS EN JS SIMPLEMENTE SUMANDOLAS !!!!
    string2 = " yo si que cambié :v";

    console.clear();
    console.log(string + "!\n\n\n" + string2 + "!\n\n");

    //RESULTADO: Hola :] ya cambié xd!.
    //se le suma el valor original del string con el segundo asignado, posteriormente se le agrega elñ "!" ya que así se le pidió a la consola que lo imprimiera.
}

function prueba (a) {
    console.log("\n\nEjemplo de la función que se manda a llamar con parametros dentro de la función de 'operadores_matemáticos' que es a/5 ---> " + (a/5).toFixed(3) + "\n\n");
}

function ejemplo_operadores_matematicos() {
    let num = 2;
    let num2 = 3;
    let num3 = 3.1416;
    let num4 = 2.7182;

    console.log("\n\n------OPERADORES MATEMÁTICOS--------\n\n");
    console.log("\nEjemplo de la operación (2+3)/3 ---> " + ((num + num2)/num2).toFixed(2) + "\n\n");
    console.log("\n\nEjemplo de la operación undifine/3.1416 ---> " + undefined/num3 + "\n\n");
    prueba(num4);
    console.log("\n\nEjemplo de la operación (2+3)(3.1416*2.7182) ---> " + ((num + num2)*(num3*num4)).toFixed(3) + "\n\n");
}

function ejemplo_comparacion(){
    let x,y;
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
    let a,b,z,u;
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

function ejemplo_comparacion_operadores() {

    console.log("\n\n------ COMPARACIÓN CON OPERADORES LÓGICOS TIPO 'OR' O 'AND' --------\n\n")

    if (false || null || undefined || "" || 0 || NaN)
    {
        console.log("\n\n->Esta línea de código jamás se va a ejecutar :>.\nY si se ejecuta...Hola.\n\n");
    }
    else
    {
        console.log("\n\nTodo falso alv!!!!!\n\n");
    }
    if(true && "hello" && 1 && -1 && "false") 
    {
        console.log("\n\nTodo verdadero :D!!!!!\n\n");
    }
}



/** ---------- FUNCIÓN MAIN --------------- */

function main () {
    ejemplo_concatenar_strings();
    ejemplo_operadores_matematicos();
    ejemplo_comparacion();
    ejemplo_comparacion_strings();
    ejemplo_comparacion_operadores();
}

/** EJECUCIÓN DE FUNCIONES -------
 *                               |
 *                               |
 *                               |
 *                               V    */

main();

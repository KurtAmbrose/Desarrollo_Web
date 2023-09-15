var x;
x=3.1416;

function main() {
    console.clear();
    if (x == undefined)
    {
        console.log("\n\n\nLa variable x no está definida :(.\n\n");
    } 

    if(x==3.1416)
    {
        x=x+2.7182;
        console.log("\n\n\nAhora me sumé con el número de euler y mi resultado es: " + x + "\n\n\n\n");
    }
    
    else
    {
        console.log("\n\n\nEl valor de X es: " + x + "\n\n\n\n");
    }
    
}




/** EJECUCIÓN DE FUNCIONES -------
 *                               |
 *                               |
 *                               |
 *                               V    */

main();
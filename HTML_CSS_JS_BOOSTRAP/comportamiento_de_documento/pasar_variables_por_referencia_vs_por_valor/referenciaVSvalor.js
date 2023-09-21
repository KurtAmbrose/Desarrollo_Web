/** ------------- Copiar por referencia vs copiar por valor (similar a apuntadores de C) ----------------- */


// POR VALOR :)

let a,b;
a=7;
b=a;

console.clear();

console.log("--------- POR VALOR --------------\n");
console.log("-> Antes de la modificación de b.\n");
console.log("El valor de a es ---> " + a);
console.log("El valor de b es ---> " + b);
console.log("\n");

b=2;
console.log("-> Después de la modificación de b.\n");
console.log("El valor de a es ---> " + a);
console.log("El valor de b es ---> " + b);
console.log("\n");

// FIN DE POR VALOR 

console.log("\n--------- POR REFERENCIA --------------\n");
// POR REFERENCIA :]

let c, d;

c= {
    nombre: "Chucho",
    x:9 };
d=c;

console.log("-> Antes de la modificación de d.\n")
console.log("El valor del objeto c es:");
console.log(c);
console.log("\nEl valor del objeto d es:");
console.log(d);
console.log("\n");

d.x=8;
d.nombre="Pepa";

console.log("-> Después de la modificación de d.\n")
console.log("El valor del objeto c es:");
console.log(c);
console.log("\nEl valor del objeto d es:");
console.log(d);
console.log("\n");



// FIN DE POR REFERENCIA


//POR VALOR MEDIANTE FUNCIÓN

function cambiarPrimitiva (primitiva) {
    console.log("En cambiarPrimitiva...");
    console.log("-> antes: " + primitiva);

    primitiva=4;
    console.log("-> después: " + primitiva);
}

let prim;
prim=11;

console.log("\n-------------- Pasar por valor mediante una función ------------\n");
cambiarPrimitiva(prim);
console.log("--> Después de la función cambiarPrimitival, valor original: " + prim);
console.log("\n");


//POR REFERENCIA MEDIANTE FUNCIÓN

function cambiarObjeto (objeto) {
    console.log("En cambiarObjeto...");
    console.log("-> antes:");
    console.log(objeto);
    console.log("\n");

    objeto.x=6;
    objeto.y=78;
    objeto.z="Baneado papu";

    console.log("-> después:");
    console.log(objeto);
    console.log("\n");
}

let obj;
obj= {x:78, y:97, z:13}

console.log("\n-------------- Pasar objeto mediante una función ------------\n");
cambiarObjeto(obj);
console.log("--> Después de la función cambiarObjeto, valor nuevo:");
console.log(obj);
console.log("\n");
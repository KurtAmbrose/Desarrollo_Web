/** ------------- ARREGLOS ----------------- */

let array = new Array();
array[0] = "Diego";
array[1] = 19;
array[2] = function (name) {
    console.log("Que wuapo el " + name);        // SE PUEDEN GUARDAR FUNCIONES Y OBJETOS EN UN ARREGLO YA QUE ES SIMPLEMENTE UN CONJUNTO DE DATOS
};
array[3] = {
    curso: "HTML, CSS, JAVASCRIPT y BOOTSTRAP",
    "siguiente curso": "JavaScript y PHP"
};

console.clear();
console.log(array);
console.log(array[1]);
array[2] (array[0]);                              // ASÍ SE EJECUTA UNA FUNCIÓN QUE ESTÁ DENTRO DE UN ARREGLO
console.log(array[3].curso);                      // ASÍ SE IMPRIMEN LOS DATOS DE UN OBJETO QUE PERTENECE A UN ARRAY



// ----- Manera corta de declarar arreglos/arrays ----------

let arreglo = ["John-117", "Fred-104", "Kelly-087", "Linda-058", "Samuel-034", "Kurt-051"];
console.clear();
//console.log(arreglo);

for(let i = 0; i < arreglo.length; i++) {
    console.log("Spartan II: " + arreglo[i]);
}

let objeto = {
    nombre: "Spartan-B312",
    edad: 21,
    rango: "Teniente",
    equipo: "NOBLE",
}

console.log("\n\n");

for(let prop in objeto) {                               // FOR QUE SIRVE PARA OBJETOS Y ARREGLOS. Es muy útil porque sólo va a llegar hasta el tamaño del arreglo y hasta los atributos que tenga el objeto
    console.log(prop + ": " + objeto[prop]);
}

console.log("\n\n");

arreglo.desconocido = "NOLA";
for(let spartans in arreglo) {                          //Los arreglos al final son sólo objetos
    console.log("Spartan II: " + arreglo[spartans]);
}
/** --------------------CREACIÓN DE OBJETOS EN JS------------------------------ */

const compania = new Object();
let pais="país";

compania.nombre="Armería Misriah";
compania.ceo = new Object();
compania.ceo.nombre="Juanito";
compania.ceo.colorFavorito="negro";
compania["valor de la compañía"]=300;
compania[pais]="Tierra";



console.clear();
console.log(compania);
console.log("\n\nEl jefe de la compañía " + compania["nombre"] + " es ---> " + compania.ceo.nombre + "\n" + "El valor de la compañia es de " + compania["valor de la compañía"] + "\n\n");
console.log(compania["nombre"]);
console.log(compania[pais]);

console.log("\n\n"); 

/** ----------- MEJOR MANERA DE DECLARAR LOS OBJETOS ------------------ */

const comp2 = {
    "nombre de la compañía": "Tiktok",
    CEO: {
        nombre: "Shou",
        "apellido paterno": "Zi",
        "apellido materno": "Chew",
        colorFav: "Negro y Blanco"
    },
    "valor de la compañía": 300
};

console.log(comp2);
console.log("\n\n");
// MANIPULACIÓN DEL DOM

console.log(document.getElementById("titulo")); //imprime la etiqueta que tehga el id "titulo", ya que con la función de "getElementById" toma la etiqueta con ese ID especificado


// FUNCIÓN QUE DICE "HOLA"

function decirHola() {

    //Guarda el contenido de la caja de texto en una variable y luego guarda el saludo completo en otra variable 
    let nombre, titulo; 

    nombre = document.getElementById("nombre").value, saludo = "<h2>hola " + nombre + "!</h2>";
    
    console.log(saludo); //Se imprime para ver si funciona correctamente

    //Se imprime en la página en la etiqueta que posea el id de "resultado"
    
    document.getElementById("resultado").innerHTML = saludo; //con innerHTML transforma lo escrito dentro de la etiqueta en contenido propio de html

    if(nombre === "estudiante")
    {
        titulo = document.querySelector("h1").textContent; //con textContent, sólo se cambia el contenido que hay dentro de la etiqueta, poniendolo sólo como texto

        titulo = titulo + " y feliz viernes!";

        document.querySelector("h1").textContent = titulo; //se pasa por referencia y se actualiza

        //con querySelector se pueden modificar las etiquetas de html mejor que con getElementById, ya que permite cambair más de un elemento o directamente con sólo una etiquetasin ID.
    }
}
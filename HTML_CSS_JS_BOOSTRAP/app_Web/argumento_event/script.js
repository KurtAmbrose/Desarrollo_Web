// ARGUMENTO "EVENT"


//Se añade este evento para poder cargar el archivo de javascript en caso de que este esté en el head del documento HTML
document.addEventListener("DOMContentLoaded",

    function (event)
    {
        
        // FUNCIÓN QUE DICE "HOLA"

        function decirHola(event) {

            console.log(event);

            //Guarda el contenido de la caja de texto en una variable y luego guarda el saludo completo en otra variable 
            let nombre, titulo; 

            nombre = document.getElementById("nombre").value, saludo = "<h2>hola " + nombre + "!</h2>";
            
            this.textContent = "Bien, lo dijiste :D"; //cambia el contenido de texto del botón

            console.log(this); //imprime la etiqueta de html que apunta this.

            //Se imprime en la página en la etiqueta que posea el id de "resultado"
            
            document.getElementById("resultado").innerHTML = saludo; //con innerHTML transforma lo escrito dentro de la etiqueta en contenido propio de html

            if(nombre === "estudiante")
            {
                titulo = document.querySelector("h1").textContent; //con textContent, sólo se cambia el contenido que hay dentro de la etiqueta, poniendolo sólo como texto

                titulo += " y feliz viernes!";

                document.querySelector("h1").textContent = titulo; //se pasa por referencia y se actualiza

                //con querySelector se pueden modificar las etiquetas de html mejor que con getElementById, ya que permite cambiar más de un elemento o directamente con sólo una etiquetasin ID.
            }
        }

        //Unubstrusive event binding
        document.querySelector("button").addEventListener("click", decirHola); //ejecuta la función con el botón sin la necesidad de poner onClick en el html.
                                                                               //Lo que imprime es la etiqueta a la que hace referencia
        document.querySelector("body").addEventListener("mousemove", 
        
            function(event)
            {
                if(event.shiftKey === true) //shifKey sirve para cuando el usuario aprieta la tecla shift. En este if, si se aprieta la tecla "shift" del teclado, entonces se va imprimir las coordenadas del cursor
                {
                    console.log("x: " + event.clientX); //clientX sirve para saber la posición horizontal del mouse
                    console.log("y: " + event.clientY); //clienty sirve para saber la posición vertical del mouse
                }
            }

        );
    }
);

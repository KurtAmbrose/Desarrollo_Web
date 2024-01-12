// Ejemplo de Ajax


//Se agrega el script de java para que se cargue después que el html y css se terminen de cargar
document.addEventListener("DOMContentLoaded", 

    function(event)
    {

        //función que despliega los datos obtenidos del archivo txt
        function desplegarTexto(event)
        {
            const xhttp = new XMLHttpRequest(); //se inicializa una solicitud para ajax
            
            xhttp.open('GET', './texto.txt', true); //se obtiene el contenido del texto

            xhttp.send(); //se envía al script

            //se prepara un método para realizar cierta acción con la información adquirida
            xhttp.onreadystatechange = function () {

                //validacón para ver si no hubieron errores
                if(this.readyState === 4 && this.status === 200)
                {
                    console.log(this.status); //imprime en la consola para verificar si se hizo correctamente

                    //imprime en el archivo html el texto adquirido en el archivo de texto + otros caracteres
                    document.querySelector("p").innerHTML = "<h2 class = \"mt-5\">" + this.responseText + "</h2>";
                }
            }
        }

        //Espera a que se de click al botón para ejecutar la acción anterior ("desplegarDatos")
        document.querySelector("button").addEventListener("click", desplegarTexto);
    }
);

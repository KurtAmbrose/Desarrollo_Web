// Ejemplo 2 de Ajax

document.addEventListener("DOMContentLoaded",

    function(event)
    {

        function desplegarJano(event)
        {
            const xhttp = new XMLHttpRequest();

            let datos, item, res;

            xhttp.open("GET", "./JANO.json", true);

            xhttp.send();

            xhttp.onreadystatechange = function (event) 
            {
                
                if(this.readyState === 4 && this.status === 200)
                {

                    //Se declara una variable para trabajar con el archivo JSON
                    datos = JSON.parse(this.responseText);

                    console.log(datos); // imprime los datos como un array de objetos

                    res = document.querySelector("tbody"); //se prepara la variabe res para insertar los datos en la tabla

                    res.innerHTML = ''; //se deja vacía para comenzar

                    for (item of datos) //for que va recolectando los datos y los guarda en la variable item, hecha para interactuar con JSON
                    {
                        console.log(item); //imprime cada objeto por separado y no todo el array
                        
                        //Se implementan unas comillas especiales para pasar los datos de JSON al HTML via Javascript
                        res.innerHTML += `
                        <tbody id="res">
                            <tr>
                                <th scope="row">${item.Nservicio}</th>
                                <td>${item.nombre}</td>
                                <td>${item.rango}</td>
                            </tr>
                        </tbody>` //Se usa el ${} para poder obtener los datos de la variable que guardó los datos en JSON
                    }
                }
            }
        }

        document.querySelector("button").addEventListener("click", desplegarJano); //Ejecuta la función una vez se da click al botón
    }

);
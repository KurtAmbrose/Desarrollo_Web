/** ---CIERRES O CLOSURES--- */

function volverloMultiplo(multiplo){
    function b () {
        console.clear();
        console.log("El múltiplo es: " + multiplo)
    }
    b();
    return(
        function (x) {
            return multiplo * x;
        }
    );
}

let duplica = volverloMultiplo(2);
console.log(duplica(10));
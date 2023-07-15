
let cadena  = "Hola1"
validacionPalabras(cadena);

function validacionPalabras(cadena) {

    let arregloCaracteres = cadena.split('');

    if(arregloCaracteres.length <= 8){
        let checkMayucula = false;
        let checkminusculas = false;
        let checknumero = false
        for (let i = 0; i < arregloCaracteres.length; i++) {
            const element = arregloCaracteres[i];
            
            console.log(element)
            if(element === element.toUpperCase()){
                checkMayucula = true;
            }
            if(element.toUpperCase()!= element){
                checkminusculas = true;
            }
            if(!!Number(element)){
                checknumero = true;
            }

        }

        if (checkMayucula && checkminusculas && checknumero) {
            console.log("Cadena aprobada")
        }else{
            console.log("No tiene mayusculas" +checkMayucula);
            console.log("No tiene minusculas" +checkminusculas);
            console.log("No tiene numeros" +checknumero);
        }

    }else{
        console.log("Debe tener menos de 8 catacteres especiales ");
    }
}
let primeraCadena = "Frase";
let segundaCadena = "Fresa";
if(esAnagrama(primeraCadena,segundaCadena)){
    console.log("Es un alagrama")
}else{
    console.log("No es un alagrma")
}

function esAnagrama(palabra, posibleAnagrama){
    palabra = palabra.toLowerCase();
    posibleAnagrama = posibleAnagrama.toLowerCase();
    
    palabra = palabra.split("");
    posibleAnagrama = posibleAnagrama.split("");
    
    palabra = palabra.sort();
    posibleAnagrama = posibleAnagrama.sort();
    
    palabra = palabra.join("");
    posibleAnagrama = posibleAnagrama.join("");
    
    
    if(palabra === posibleAnagrama){
      return true;
    }else{
      return false;
    }
  }
  
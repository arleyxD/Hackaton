let texto = "La casa es bonita";
let palabraLarga = encontrarPalabraMasLarga(texto);
console.log(palabraLarga);

function encontrarPalabraMasLarga(cadena) {

    const palabras = cadena.split(" ");
  
    let palabraMasLarga = "";
  
    palabras.forEach(palabra => {
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    });
  
    return palabraMasLarga;
  }
  
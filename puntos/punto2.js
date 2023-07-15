var numeros = [1, 2, 4, 7, 9];
var numerosFaltantes = encontrarNumerosFaltantes(numeros);
console.log(numerosFaltantes);

function encontrarNumerosFaltantes(array) {
    var numerosFaltantes = [];
  
    for (var i = 0; i < array.length - 1; i++) {
      var numeroActual = array[i];
      var siguienteNumero = array[i + 1];
  
      if (siguienteNumero - numeroActual > 1) {
        var numerosEntre = siguienteNumero - numeroActual - 1;
        for (var j = 1; j <= numerosEntre; j++) {
          numerosFaltantes.push(numeroActual + j);
        }
      }
    }
  
    return numerosFaltantes;
  }
let resultado = factorial(5);
console.log(resultado);  




function factorial(numero) {
    if (numero < 0) {
      return "es un numero negativo.";
    } else if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }
  
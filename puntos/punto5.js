let numero = 4

let resultado = primo(numero);
console.log(resultado);


function primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    if (numero === 1) {
      return false;
    } else {
      return true;
    }
  }

  
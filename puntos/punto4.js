let Cadena = "hola";
let Arrcdena = Cadena.split('');
let suma = 0;

for (let i = 0; i < Arrcdena.length; i++) {
    let x = Arrcdena[i];
    switch (x) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            suma = suma +1;
    }
}

console.log("En la cadena hay "+suma +" vocales")

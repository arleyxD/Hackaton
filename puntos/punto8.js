
if (palindrom("asa")) {
    console.log("Es palindromo")
}else{
    console.log("no es palindromo")
}


function palindrom(palindrom){
    
    let tamaño = palindrom.length;
    for (let i = 0; i < tamaño / 2; i++) {
        if (palindrom.charAt(i) !== palindrom.charAt(tamaño - 1 - i)) {
            return false;
        }
    }
    return true;
}


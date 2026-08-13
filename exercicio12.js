function verificarNumero(numero){
    if (numero > 0 ) {
         return "Positivo"
    } else if (numero < 0) {
        return "Negativo"
    } else {
        return "Zero"
    }
        
}

let resultado = verificarNumero(-1);
console.log(resultado);
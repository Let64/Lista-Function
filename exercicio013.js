function verificarPar(numero){
    if (numero % 2 === 0) {
        return "Par"       
    } else {
        return "Ímpar"
    }
}

let resultado = verificarPar(7);
console.log(resultado);
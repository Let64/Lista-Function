function verificarAprovacao(nota) {

    if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 7 ) {
        return "Bom"
    } else if (nota === 6 ) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }

    
}

let resultado = verificarAprovacao(9);
console.log(resultado);

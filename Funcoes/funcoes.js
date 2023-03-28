//treinando com valores
function incrementarValor (valor, percentualJuros){
    const valordeacrescimo = (percentualJuros / 100 ) * valor;
    return valor + valordeacrescimo;
}

console.log(incrementarValor(100, 10));

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        console.log('abaixo do peso');
    }
    else if (imc >= 18.5 && imc < 25) {
        console.log('peso normal');
    }
    else if (imc >= 25 && imc < 30) {
        console.log('Acima do peso');
    }
    else if (imc >= 30 && imc < 40) {
        console.log('Obeso');
    }
    else {
        console.log('obesidade morbida');
    }
}

function main() {
    const peso = 70;
    const altura = 1.72;
    const imc = calcularIMC(peso, altura);
    console.log(imc);
    console.log(classificarIMC(imc));
}

main();

/*Função imediatamente invocada:
se fizer isso não precisa chamar o main() e pode até mesmo tirar o nome e não pode ser chamada

(function main() {
    const peso = 70;
    const altura = 1.72;
    const imc = calcularIMC(peso, altura);
    console.log(imc);
    console.log(classificarIMC(imc));
})();*/
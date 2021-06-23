const calcularIMC = (peso,altura) => {
    let imc = (peso/Math.pow(altura,2)).toFixed(2);
    let classificacao;
    
    if(imc < 18.5) {
        classificacao = "Magreza";
    } else if(imc >= 18.5 && imc <= 24.9) {
        classificacao = "Saudável";
    } else if(imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if(imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade grau I";
    } else if(imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade grau II (severa)";
    } else {
        classificacao = "Obesidade grau III (morbida)";
    }

    let resultado = {imc: imc, classificacao: classificacao};

    return resultado;
};


exports.imc = calcularIMC;
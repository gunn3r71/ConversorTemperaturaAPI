const conversor = (temp, grauAtual, grauConverter) => {
    let conversao;

    if (grauAtual.toUpperCase() == 'C') {
        switch(grauConverter.toUpperCase()) {
            case 'F':
                conversao = (temp * (9/5) + 32);
            break;
            case 'K':
                conversao = (temp + 273.15);
            break;          
        }
    } else if (grauAtual.toUpperCase() == 'F') {
        switch(grauConverter.toUpperCase()) {
            case 'C':
                conversao = ((temp - 32) * (5/9));
            break;
            case 'K':
                conversao = ((temp - 32) * (5/9) + 273.15);
            break;          
        }
    } else {
        switch(grauConverter.toUpperCase()) {
            case 'C':
                conversao = (temp - 273.15);
            break;
            case 'F':
                conversao = (temp * (9/5) + 32);
            break;          
        }
    }

    return conversao.toFixed(4);
};

exports.converter = conversor;
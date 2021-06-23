const conversor = (temp, grauAtual, grauConverter) => {
    let conversao;

    if (grauAtual.toUpper() == 'C') {
        switch(grauConverter.toUpper()) {
            case 'F':
                conversao = (temp * (9/5) + 32);
            break;
            case 'K':
                conversao = (temp + 273.15);
            break;          
        }
    } else if (grauAtual.toUpper() == 'F') {
        switch(grauConverter.toUpper()) {
            case 'C':
                conversao = ((temp - 32) * (5/9));
            break;
            case 'K':
                conversao = ((temp - 32) * (5/9) + 273.15);
            break;          
        }
    } else {
        switch(grauConverter.toUpper()) {
            case 'C':
                conversao = (temp - 273.15);
            break;
            case 'F':
                conversao = (temp * (9/5) + 32);
            break;          
        }
    }

    return conversao;
};

exports.conversor = conversor;
export function validateBinary(binary) {
    if(!binary.match(/[0-1]/)) {
        const error = new Error('Valor invalido');
        throw error;
    }
}

export function validateDecimal(decimal) {
    if(!decimal.match(/[0-9]/)) {
        const error = new Error('Decimal inválido');
        throw error;
    }
}
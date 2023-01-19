export function validateBinary(binary) {
    if(!binary.match(/^[01]+$/)) {
        const error = new Error('Binário invalido');
        throw error;
    }
}

export function validateDecimal(decimal) {
    if(!decimal.match(/^[0-9]+$/)) {
        const error = new Error('Decimal inválido');
        throw error;
    }
}
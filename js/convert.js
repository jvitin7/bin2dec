export function binToDec(number) {
    const dec = parseInt(number, 2);

    return dec;
}

export function decToBin(number) {
    const bin = Number(number.toString(2));
    
    return bin;
}
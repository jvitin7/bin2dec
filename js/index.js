import { binToDec, decToBin } from "./convert.js";
import { exchange } from "./exchange.js";
import { validateBinary, validateDecimal } from "./regex.js";

const input = document.getElementById('value');
const result = document.getElementById('result');

const convert = document.getElementById('convert');
const trade = document.getElementById('exchange');

value.focus();

convert.addEventListener('click', () => {
    
    if(input.dataset.value === 'binary') {
        result.value = `= ${binToDec(input.value)} dec`;
    } else {
        const resultNumber = Number(input.value);
        result.value = `= ${decToBin(resultNumber)} bin`;
    }

})

trade.addEventListener('click', exchange);
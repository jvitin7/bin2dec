import { binToDec, decToBin } from "./convert.js";
import { exchange } from "./exchange.js";
import { validateBinary, validateDecimal } from "./regex.js";

const input = document.getElementById('value');
const result = document.getElementById('result');

const convert = document.getElementById('convert');
const trade = document.getElementById('exchange');

input.focus();

convert.addEventListener('click', () => {
    input.classList.remove('error');
    document.getElementById('error').textContent = '';
    
    if(input.dataset.value === 'binary') {

        try {
            validateBinary(input.value);
            result.value = `= ${binToDec(input.value)} dec`;
        } catch (error) {
            result.value = '';
            input.classList.add('error');
            document.getElementById('error').textContent = error.message;
        }

    } else {

        try {
            validateDecimal(input.value);
            result.value = `= ${decToBin(input.value)} bin`;
        } catch (error) {
            result.value = '';
            input.classList.add('error');
            document.getElementById('error').textContent = error.message;
        }
    }

})

trade.addEventListener('click', exchange);
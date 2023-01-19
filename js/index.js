import { binToDec } from "./convert.js";
import { decToBin } from "./convert.js";
import { exchange } from "./exchange.js";
import { validateBinary, validateDecimal } from "./regex.js";

const input = document.getElementById('value');
const result = document.getElementById('result');

const convert = document.getElementById('convert');
const trade = document.getElementById('exchange');

const error = document.getElementById('error');

export function resetStyles() {
    input.value = '';
    result.value = '';
    input.classList.remove('error');
    error.textContent = '';
}

input.focus();

convert.addEventListener('click', () => {
    input.classList.remove('error');
    document.getElementById('error').textContent = '';
    
    if(input.dataset.value === 'binary') {

        try {
            validateBinary(input.value);
            result.value = `= ${binToDec(input.value)} dec`;
        } catch (error) {
            input.classList.add('error');
            document.getElementById('error').textContent = error.message;
        }

    } else {

        try {
            validateDecimal(input.value);
            const number = Number(input.value);
            result.value = `= ${decToBin(number)} bin`;
        } catch (error) {
            input.classList.add('error');
            document.getElementById('error').textContent = error.message;
        }
    }

})

trade.addEventListener('click', exchange);
import { resetStyles } from "./index.js";

const title = document.getElementById('title');
const input = document.getElementById('value');
// const result = document.getElementById('result');
// const error = document.getElementById('error');

export function exchange() {

    resetStyles();

    if(input.dataset.value === 'binary') {

        title.textContent = 'Conversor Decimal para Binário';
        input.dataset.value = 'decimal';
        input.placeholder = 'Decimal';
        document.title = 'Dec2Bin';

    } else {

        title.textContent = 'Conversor Binário para Decimal';
        input.dataset.value = 'binary';
        input.placeholder = 'Binário';
        document.title = 'Bin2Dec';

    }

    input.focus();
    
}
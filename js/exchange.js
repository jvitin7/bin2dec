const title = document.getElementById('title');
const input = document.getElementById('value');
const result = document.getElementById('result');
const error = document.getElementById('error');

export function exchange() {
    input.value = '';
    result.value = '';
    input.classList.remove('error');
    error.textContent = '';


    if(input.dataset.value === 'binary') {

        title.textContent = 'Conversor Decimal para Binário';
        input.dataset.value = 'decimal';
        input.placeholder = 'Decimal';
        document.title = 'Dec2Bin';

        input.focus();
    } else {

        title.textContent = 'Conversor Binário para Decimal';
        input.dataset.value = 'binary';
        input.placeholder = 'Binário';
        document.title = 'Bin2Dec';

        input.focus();
    }
    
}
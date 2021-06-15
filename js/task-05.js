const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


const textInput = function () {
    if (input.value === '') {
        output.innerHTML = 'незнакомец';
    } else {
        output.innerHTML = input.value;
    }
}
input.addEventListener('input', textInput);
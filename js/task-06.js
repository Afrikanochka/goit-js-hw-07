
const textElem = document.querySelector('#validation-input');
const dataLength = textElem.getAttribute("data-length");

const allClasses = (add, remove) => {
    textElem.classList.add(add);
    textElem.classList.remove(remove);
}
textElem.addEventListener('blur', event => {
    const input = event.target.value;
    
     if (input.length === +dataLength) {
         allClasses('valid', 'invalid');
         
     } else {
         allClasses('invalid', 'valid');
  }
});

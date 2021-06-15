const fontSizeRef = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

fontSizeRef.addEventListener('input', newFontSize);
function newFontSize(event) {
    const size = fontSizeRef.value;

    text.style.fontSize = size + 'px';
}
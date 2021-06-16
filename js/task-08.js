const refs = {
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    inputControl: document.querySelector('#controls input'),
};
refs.render.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', destroyBoxes);

function getAmount() {
    const amount = refs.inputControl.value;
    createBoxes(amount);
}

function createBoxes(amount) {
    let size = 30;
    let arrMarkup = [];
    for (let i = 0; i < amount; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.width = size + 'px';
        newDiv.style.height = size + 'px';
        newDiv.classList.add('item');
        arrMarkup.push(newDiv);
        size += 10;
        const randomIntRgb = [random(0, 256), random(0, 256), random(0, 256)];
        newDiv.style.borderColor = `rgb(${randomIntRgb})`;
    }
    refs.boxes.append(...arrMarkup);
    console.log(arrMarkup);
    
}
function destroyBoxes() {
  boxes.innerHTML = '';
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1));    
}

const allElems = document.querySelector('#categories');

const categories = allElems.children;
console.log(`В списке ${categories.length} категории`);

[...categories].forEach((category) => {
    const title = category.querySelector('h2');
    console.log(`Категория: ${title.textContent}`);

    const ulElems = category.querySelector('ul');
    const children = ulElems.children;
    console.log(`Количество элементов: ${children.length}`)
})
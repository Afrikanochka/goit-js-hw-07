const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('ul');

const allIngredients = ingredients.map(ingredient => {
  const liElem = document.createElement('li');
  liElem.textContent = ingredient;
  return liElem;
});

list.append(...allIngredients);
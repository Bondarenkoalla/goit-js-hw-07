const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elementsList = document.querySelector('ul');
const elements = ingredients.map(ingredient => {
  const ellement = document.createElement('li');
  ellement.textContent = ingredient;
  return ellement;
});

elementsList.append(...elements);

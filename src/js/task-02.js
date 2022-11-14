const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');


ingredients.forEach(item => {
    const itemList = document.createElement('li');
    itemList.textContent = item;
    itemList.classList.add('item');

    ingredientsList.append(itemList);
});
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`);

const newArrayOfIngredients = ingredients.map(element => {
  const newElement = document.createElement(`li`);
  newElement.classList.add(`item`);
  newElement.textContent = element;
  return newElement;
})

ingredientsList.append(...newArrayOfIngredients);

const listOfCategories = categories.querySelectorAll(".item");

console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`)
});



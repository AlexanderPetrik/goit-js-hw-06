const categories = document.querySelector("#categories");
const listOfCategories = categories.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}`);
listOfCategories.forEach((category) => {
  const titleOfCategory = category.querySelector("h2").textContent;
  const quantityOfCategory = category.querySelectorAll("li").length;
  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${quantityOfCategory}`);
});

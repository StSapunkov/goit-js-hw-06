const NumberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: `, NumberOfCategories.length);

NumberOfCategories.forEach(item => {
    console.log(`Category : ${item.firstElementChild.textContent}`);
    console.log(`Elements : ${item.lastElementChild.children.length}`);
});



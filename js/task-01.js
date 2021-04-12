const ulCategories = document.querySelectorAll(`.item`);

console.log(`В списке ${ulCategories.length} категории.`);

ulCategories.forEach(categorie => {
  console.log(`Категория:${categorie.childNodes[1].textContent}`);
  console.log(
    `Количество элементов:${categorie.childNodes[3].children.length}`,
  );
});

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");

const liList = ingredients.map((ingredient) => {
  const liELements = document.createElement("li");
  liELements.textContent = ingredient;
  liELements.classList.add("item");
  return liELements;
});

ulList.append(...liList);

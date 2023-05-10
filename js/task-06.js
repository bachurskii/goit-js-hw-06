const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const redInput = validationInput.getAttribute("data-length");
  const blueInput = validationInput.value;

  if (blueInput.length === Number(redInput)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});

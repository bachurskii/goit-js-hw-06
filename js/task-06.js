const validationInput = document.querySelector("#validation-input");

const inputLength = Number(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", (event) => {
  if (event.target.value.length === inputLength) {
    validationInput.classList.add("valid");
  }
  if (validationInput.classList.contains("invalid")) {
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
  }
});

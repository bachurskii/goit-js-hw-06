const inputLogin = document.querySelector(".login-form");

inputLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputEmail = inputLogin.elements.email;
  const inputPassword = inputLogin.elements.password;

  if (!inputEmail.value || !inputPassword.value) {
    alert("Please fill al fields");
    return;
  }

  const formData = {
    email: inputEmail.value,
    password: inputPassword.value,
  };
  console.log(formData);

  inputLogin.reset();
});

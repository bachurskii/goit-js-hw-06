const input = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

input.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  spanText.style.fontSize = fontSize;
});

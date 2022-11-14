const inputItem = document.querySelector("#name-input");
const outputItem = document.querySelector("#name-output");
const h1El = document.querySelector("h1");

const onInputChange = event =>
    inputItem.value === "" ? outputItem.textContent = "Anonymous" : outputItem.textContent = event.target.value;

inputItem.addEventListener("input", onInputChange);
const inputElement = document.querySelector("#font-size-control");
const textSizeElement = document.querySelector("#text");

const onInputRange = () => textSizeElement.style.fontSize = `${inputElement.value}px`;

inputElement.addEventListener("input", onInputRange);
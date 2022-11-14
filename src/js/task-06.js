const ElementInput = document.querySelector("input");
const lengthEl = ElementInput.getAttribute("data-length");

const onInputBlur = event => {
    event.target.classList.add("invalid");

    if (parseInt(lengthEl) === event.target.value.length) {
        event.target.classList.replace("invalid", "valid");
    }
};


ElementInput.addEventListener('blur', onInputBlur);
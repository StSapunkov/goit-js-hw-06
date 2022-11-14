const counter = {
    valueEl: document.querySelector("#value"),
    ButtonPlus: document.querySelector('[data-action="increment"]'),
    ButtonMinus: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const onMinusCounterValue = () => {
    counterValue -= 1;
    counter.valueEl.textContent = counterValue;
};

const onPlusCounterValue = () => {
    counterValue += 1;
    counter.valueEl.textContent = counterValue;
};

counter.ButtonPlus.addEventListener("click",  onPlusCounterValue);
counter.ButtonMinus.addEventListener("click", onMinusCounterValue);
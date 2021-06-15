const button = {
  increment: document.querySelector("[data-action='increment']"),
  decrement: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

    let counterValue = 0;

const increment = () => {
    counterValue += 1;
    button.span.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
     button.span.textContent = counterValue;
};
  
button.increment.addEventListener('click', increment);
button.decrement.addEventListener('click', decrement);
    

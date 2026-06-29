console.clear();
const dataInput = document.querySelector('[data-js="first-input"]');
const confirmButton = document.querySelector('[data-js="button-uppercase"]');
confirmButton.addEventListener("click", () =>{
    const oldValue = dataInput.value;
    const newValue = oldValue.toUpperCase();
    dataInput.value = newValue; 
});
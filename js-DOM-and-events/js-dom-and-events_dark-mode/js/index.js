console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const addButton = document.querySelector('[data-js="dark-mode-button"]');
addButton.addEventListener("click", () => { bodyElement.className = "dark"});
const removeButton = document.querySelector('[data-js="light-mode-button"]');
removeButton.addEventListener("click", () => {bodyElement.classList.remove("dark")});
const toggleButton = document.querySelector('[data-js="toggle-button"]');
toggleButton.addEventListener("click", () => {bodyElement.classList.toggle("dark")});



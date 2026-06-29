console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data);
});


form.addEventListener("submit", (event) => {
    const formElements = event.target.elements;
    const badnessValue = formElements.badness.value;
    const ageValue = formElements.age.value;
    const ageBadnessNum = ageValue + badnessValue;
    return ageBadnessNum;
    console.log(ageBadnessNum);
})

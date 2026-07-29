import { uid } from "uid";
function Form({ onAddActivity }) {
    const nameId= uid();
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const newActivity = {
            name: form.elements.name.value,
            isForGoodWeather: form.elements.isForGoodWeather.checked,
        };

    onAddActivity(newActivity);

    form.reset();
    form.elements.name.focus();
    }
    return (
        <form className="activityForm" onSubmit={handleSubmit}>
             <h2>Add new Activity:</h2>

      <div className="form-row">
        <label htmlFor={nameId}>Name:</label>
        <input type="text" id={nameId} name="name" required />
      </div>

      <div className="form-Container">
        <label htmlFor="isForGoodWeather">Good weather activity:</label>
        <input type="checkbox" id="isForGoodWeather" name="isForGoodWeather" />
      </div>

      <button type="submit">Submit</button>
        </form>
    );
}
export default Form;
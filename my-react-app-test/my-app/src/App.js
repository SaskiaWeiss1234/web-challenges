import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { uid } from "uid";
import Form from './components/Form';
import List from './components/List';

function App() {
  const [ activities, setActivities] = useState([]);
  const [weather, setWeather] = useState({condition: "", temperature: "",});

  useEffect(() => {
  async function fetchWeather() {
    try {
      const response = await fetch("https://example-apis.vercel.app/api/weather");
      const data = await response.json();
      console.log(data); // check this to confirm the actual field names
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }

  fetchWeather();
  // fetch again every five seconds
  const intervalId = setInterval(fetchWeather, 5000);
  return () => clearInterval(intervalId);
}, []);

  function handleAddActivity(newActivity) {
    setActivities((prevActivities) => [
      ...prevActivities,
      {...newActivity, id: uid() },
    ]);
  }
    function handleDeleteActivity(id) {
    setActivities((prevActivities) => 
    prevActivities.filter((activity) => activity.id !== id)
  );
}


const isGoodWeather = weather ? weather.isGoodWeather : true;
       const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <div className="App">
         <h1>
          {weather.condition} {weather.temperature}°C
        </h1>
      
      <Form onAddActivity={handleAddActivity} />
     <ul className="activityList">
      {activities.map((activity) => (
        <List activities={filteredActivities} isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity} />
        ))}
     </ul>
    </div>
  );
}

export default App;

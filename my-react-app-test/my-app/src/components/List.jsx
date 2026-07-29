function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <div className="activityList">
      <h2>{isGoodWeather ? 'Good-weather activities' : 'Bad-weather activities'}</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
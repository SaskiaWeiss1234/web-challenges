import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  function handleAdd() {
    setPeople(people + 1);
}
function handleDecrement() {
  setPeople(people - 1);
}
  const [people, setPeople] = useState(0);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={handleAdd} onDecrement={handleDecrement} /> {/* onAdd is the prop that gets passed to the child */}
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}

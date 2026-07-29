export default function App() {
  function handleBuy(text) {
    console.log("You purchase of a washing machine is completed");
  }
  return <Button onBuy={handleBuy} color="crimson" disabled={false} text="Click me" />
  return <Button onBuy={handleBuy} color="blue" disabled={false} text="Submit" />
}
function Button({color, disabled, text, onBuy }) {
  return ( <button className="button" onClick={() => onBuy} style={{ color : color }} disabled={disabled}>
      {text}
    </button>)
  }}
export default function App() {
  return <Greeting name="Klaus" />
}
function Greeting({name}) {
  const coaches = ["Klaus", "Marcel", "Jacob"];
  return  <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>
  }
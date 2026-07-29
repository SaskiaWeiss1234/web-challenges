export default function App() {
  const isItHappy = true;
  return ( 
    <Smiley isHappy={isItHappy} />
  );
}
function Smiley({isHappy}) {
  return <h1>
    {isHappy ? "😁" : "😢"}
  </h1>
}
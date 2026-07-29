import Card from "./components/Card";

export default function App() {
  const fruits = [{id: 1337, name: "🍌 Banana", color: "yellow"}, 
                  {id: 1338, name: "🍏 Apple", color: "green"},
                {id: 1339, name: "🍓 Strawberry", color: "red"},
              {id: 1340, name: "🍑 Peach", color: "orange"},
            {id: 1341, name: "🫐 Blueberry", color: "purple"}];

  return (
    
    <div className="app">
      {fruits.map((fruit) => (
      <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}

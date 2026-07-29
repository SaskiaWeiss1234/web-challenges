import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [entries, setEntries] = useState(initialEntries)
  function handleAddEntry(newEntry) {
    setEntries([...entries,{...newEntry, id: uid()}])
  }
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onSubmit={handleAddEntry}/>
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

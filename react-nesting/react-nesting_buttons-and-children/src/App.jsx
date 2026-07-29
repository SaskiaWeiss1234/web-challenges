import React from "react";
import "./styles.css";
import Button from "./Button.jsx"
export default function App({name}) {
  return (
    <main>
        <Button>Submit</Button>
        <Button>Delete</Button>
        <Button>Add</Button>
        <Button>Cancel</Button>
</main>
  );
}


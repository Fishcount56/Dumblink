import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [coba, setCoba] = useState({
    title: "",
    description: "",
    titlelinks: []
  });

  const addFirst = () => {
    setCoba({
      title: "first",
      description: "first",
      titlelinks: ["first", "second"]
    });
  };

  const addSome = () => {
    setCoba({
      title: coba.title,
      description: coba.description,
      titlelinks: [...coba.titlelinks, "Fourth", "fifth"]
    });
  };

  console.log(coba);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => addFirst()}>First</button>
      <button onClick={() => addSome()}>Second</button>
    </div>
  );
}

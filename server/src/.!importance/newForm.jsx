import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [shortProps, setShortProps] = useState({
    title: "",
    description: ""
  });

  const shortChange = (e) => {
    setShortProps({
      ...shortProps,
      [e.target.name]: e.target.value
    });
  };

  const [cardForm, setCardForm] = useState([{ titlelinks: "", links: "" }]);

  const formOnChange = (index, e) => {
    const values = [...cardForm];
    values[index][e.target.name] = e.target.value;
    setCardForm(values);
  };

  const addForm = () => {
    setCardForm([...cardForm, { titlelinks: "", links: "" }]);
  };

  const arr1 = cardForm.map(({ titlelinks }) => titlelinks);
  const arr2 = cardForm.map(({ links }) => links);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label>Title</label>
      <input type="text" name="title" onChange={shortChange} />
      <label>Description</label>
      <input type="text" name="description" onChange={shortChange} />
      {cardForm.map((item, index) => (
        <div key={index}>
          <label>Title Links</label>
          <input
            type="text"
            name="titlelinks"
            onChange={(e) => formOnChange(index, e)}
            required
          />
          <label>Links</label>
          <input
            type="text"
            name="links"
            onChange={(e) => formOnChange(index, e)}
            required
          />
        </div>
      ))}
      <button onClick={addForm}>Add</button>
      <button onClick={testConsole}>Print</button>
    </div>
  );
}

import "./styles.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function App() {
  const [coba, setCoba] = useState({
    title: "Hello",
    description: "Hello",
    titlelinks: ["FB", "LI", "TW"],
    links: ["facebook", "linkedin", "TW"]
  });

  console.log(coba.titlelinks)
  return (
    <div className="App">
      {/* <h1>{coba.title}</h1> */}
      {Object.keys(coba.titlelinks, coba.links).map((item, index) => (
        <h1>{coba.titlelinks[item]}{coba.links[item]}</h1>
      ))}
    </div>
  );
}

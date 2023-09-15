import { useState } from "react";
import Button from "./components/Button";
import data from "./data/data";
import "./App.css";

function App() {
  const [text , setText]=useState("");
  return (

    <div className="container">
      <div className="main">
        <div className="txt">{text}</div>
        <div className="grid">
          {
            data.map((data) => {
              return <Button key={data.keyEl} {...data} setText={setText} text={text} />;
            }
            )
          }
        </div>
      </div>
    </div>
  );
}




export default App;
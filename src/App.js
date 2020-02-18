import React from "react";
import "./App.css";
import Header from "./components/FormHeader";
import Challenger from "./components/Challenger";


function App() {
  return (
    <div className="App">
      <Header header="Herbs & Beans Keto Cafe Weight Loss Challenge 2020" />
      <Challenger />
    </div>
  );
}

export default App;

import React from "react";
import { UseState } from "./components/UseState/index.js";
import { ClassState } from "./components/ClassState/index.js";

function App() {
  return (
    <div className="App">
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
    </div>
  );
}

export default App;

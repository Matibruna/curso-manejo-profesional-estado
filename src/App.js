import React from "react";
import { UseState } from "./components/UseState/index.js";
import { ClassState } from "./components/ClassState/index.js";
import { UseReducer } from "./components/UseReducer/index.js";

function App() {
  return (
    <div className="App">
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
      <UseReducer name="UseReducer"/>
    </div>
  );
}

export default App;

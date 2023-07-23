import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Users from "./components/users/Users";
function App() {
  return (
    <div>
      <h1>Vite + React</h1>
      <Users />
    </div>
  );
}

export default App;

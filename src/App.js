import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
// import Home from "./components/Home";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {routes}
      </header>
    </div>
  );
}

export default App;

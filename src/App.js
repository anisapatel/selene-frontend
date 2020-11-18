import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
// import Home from "./components/Home";
import routes from "./routes";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Title />
        <NavBar />
      </header>
      {routes}
    </div>
  );
}

export default App;

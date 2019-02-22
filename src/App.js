import React, { Component } from "react";
import "./App.css";
import Routes from "./routes";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;

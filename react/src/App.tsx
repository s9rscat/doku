import React, { useEffect } from "react";
import "./styles/App.scss";
import { beards } from "./businessLogic/data";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div className="app">
      <Header />

      <Container />
      <p>{beards[0].name}</p>
    </div>
  );
}

export default App;

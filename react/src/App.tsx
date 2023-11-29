import React from "react";
import "./styles/App.scss";
import { beards } from "./businessLogic/acat/data";
import Header from "./components/Header";
// import Container from "./components/Container";

function App() {
  return (
    <>
      <Header />
      {/*<Container />*/}
      <p>{beards[0].name}</p>
    </>
  );
}

export default App;

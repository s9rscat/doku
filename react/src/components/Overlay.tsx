import React from "react";
import "../styles/App.scss";

export function Overlay({ showModal }: any) {
  return <>{showModal && <div className="overlay"></div>}</>;
}

export default Overlay;

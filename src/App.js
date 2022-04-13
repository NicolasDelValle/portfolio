import { createRef, useEffect } from "react";
import createScrollSnap from "scroll-snap";

import "./App.css";

function App() {
  const container = createRef();
  const { bind, unbind } = createScrollSnap(container, {
    snapDestinationX: "0%",
    snapDestinationY: "90%",
    timeout: 100,
    duration: 300,
    threshold: 0.2,
    snapStop: false,
  });
  bind();

  return (
    <div className="App">
      <div className="SnapScrollingContainer" ref={container}>
        <div className="page bg-primary ">
          <span>seccion titulo</span>
        </div>
        <div className="page bg-success">
          <span>seccion portfolio</span>
        </div>
      </div>
    </div>
  );
}

export default App;

import { createRef, useEffect } from "react";
import createScrollSnap from "scroll-snap";

import "./App.css";

function App() {
  const container = createRef();

  useEffect(() => {
    if (!container.current) {
      return;
    }

    const { bind, unbind } = createScrollSnap(
      container.current,
      {
        snapDestinationY: "100%",
        timeout: 1,
        duration: 300,
        snapStop: true,
      },
      () => console.log("snapped")
    );
  }, [container.current]);

  return (
    <div className="App">
      <div id="container" ref={container}>
        <div className="page bg-danger">
          <div>I</div>
          <div className="hint">scroll down</div>
        </div>
        <div className="page bg-primary">
          <div>II</div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "../views/HomeView";
import lenis from "../utils/lenis";
import link from "../utils/link";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        color="255, 147, 83"
      />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>
  );
};

export default App;

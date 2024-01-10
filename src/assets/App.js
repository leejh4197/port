import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeView from "../views/HomeView";
import lenis from "../utils/lenis";
import link from "../utils/link";

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Site from "../components/Site";
import Main from "../components/Main";

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;

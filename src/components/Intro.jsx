import React, { useEffect, useState } from "react";
import { wiseSaying } from "../assets/data/wiseSaying";

const Intro = () => {
  const [random, setRandom] = useState({});

  useEffect(() => {
    const randomIDX = Math.floor(Math.random() * wiseSaying.length);
    setRandom(wiseSaying[randomIDX]);
  }, []);
  return (
    <section id="intro">
      <div class="intro__inner">
        <h1 class="intro__title">frontend developer</h1>
        <div class="intro__lines" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="intro__text">
          <div class="text">
            {random && (
              <>
                <div>{random.first}</div>
                <div>{random.second}</div>
              </>
            )}
          </div>
          <div class="img">
            <img src="/portImg.jpg" alt="어바웃" />
          </div>
        </div>
        <div class="intro__lines bottom" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;

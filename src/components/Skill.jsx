import React from "react";
import { skill } from "../assets/data/skill";

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          Challenge <em>나의 도전</em>
        </h2>
        <div className="skill__desc">
          {skill.map((el, index) => {
            return (
              <div key={index}>
                <span>{el.num}.</span>
                <h3>{el.title}</h3>
                <p>{el.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;

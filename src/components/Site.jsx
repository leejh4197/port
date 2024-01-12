import React from "react";
import { siteText } from "../assets/data/siteText";

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((el) => {
            return (
              <article className={`site__item ${el.class}`}>
                <span className="num">{el.order}</span>
                <div className="text">
                  <div>{el.first}</div>
                  <div>{el.second}</div>
                  <div>{el.third}</div>
                </div>
                <h3 className="title">{el.title}</h3>
                <div className="btn">
                  <a href={el.git}>code</a>
                  <a href={el.site}>view</a>
                </div>
                <div className="info">
                  <span>site coding</span>
                  <span>production period : {el.period}</span>
                  <span>use stack : {el.stack}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Site;

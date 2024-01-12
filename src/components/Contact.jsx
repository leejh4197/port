import React from "react";
import { RxTriangleRight, RxTriangleLeft } from "react-icons/rx";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className="text">
            <div className="git">
              <RxTriangleRight />
              <a
                href="https://github.com/leejh4197"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
              <RxTriangleLeft />
            </div>
            <div>TEL : 010-9745-4197</div>
            <div>mail : leejh4197@NAVER.COM</div>
          </div>
        </div>
        <div className="contact__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

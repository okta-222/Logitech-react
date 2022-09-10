import React from "react";
import img from "../../../shared/assets/images/mice2.webp";
import "./about.scss";

export default function About() {
  return (
    <section className="main">
      <div className="container">
        <div className="mainImg">
          <img src={img} />
        </div>
        {/*  */}
        <div className="mainTxt">
          <div className="content-txt">
            <h2>make your play</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br />
              elit Soluta eum ullam Lorem ullam Lorem ipsum dolor <br />
              sit ametipsum dolor sit amet ullam Lorem ipsum dolor <br />
              sit amet Lorem ipsum dolor sit amet consectetur Lorem <br />
              ipsum dolor sit amet Lorem ipsum dolor sit amet
            </p>
            <button className="btn">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
}

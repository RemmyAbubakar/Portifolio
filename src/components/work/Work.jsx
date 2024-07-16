import React from "react";
import "./work.css";
import Works from "./Works";

function Work() {
  return (
    <section className="work section" id="portifolio">
      <h2 className="section__title">Portifolio</h2>
      <span className="section__subtitle">Most recent works</span>
      <span className="section__subtitle">
        Deployed App
        <a href="https://mars-online.vercel.app" className="ml-2">(Click Here)</a>
      </span>

      <Works />
    </section>
  );
}

export default Work;

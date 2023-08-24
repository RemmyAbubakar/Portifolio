import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section ">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personnel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Software Eng.</h3>
                <span className="qualification__subtitle">
                  NIIT - (OpenLabs Ghana)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">Digital Marketing</h3>
                <span className="qualification__subtitle">
                  Whizzy Academy - (Pre-Mest)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022(April) -
                  2022(June)
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Software Development</h3>
                <span className="qualification__subtitle">
                  Code-Coast - (Pre-Mest)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022(August) -
                 Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Social Media Marketer</h3>
                <span className="qualification__subtitle">
                  Distress_yard - Dzorwulu (Intenship)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022(June) - 2022(July)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX/Web Designer</h3>
                <span className="qualification__subtitle">
                  Not Enough Experience - Present
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;

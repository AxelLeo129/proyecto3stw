import React from "react";
import axel_foto from "../../assets/img/fotos/axel_lopez_formal.jpg";
import "./about.scss";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const About = (props) => {
  return (
    <React.Fragment>
      <div>
        <div className="w3-container w3-blue-grey">
          <div className="row" style={{ marginLeft: "3rem" }}>
            <div
              className="col-12"
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "white",
                }}
                onClick={() =>
                  props.setDisplay({ height: "100%", display: "block" })
                }
                className="w3-bar-item w3-large"
              >
                <FontAwesomeIcon size="lg" icon={faBars} />
              </button>{" "}
            </div>
          </div>
          <div className="row about--me mb-3">
            <div className="col-6 left--side">
              <img
                src={axel_foto}
                width="25%"
                className="animate__animated animate__fadeIn"
              />
              <div className="left--side-titles ml--1">
                <h1 className="animate__animated animate__bounceInDown">
                  Axel Leonardo
                </h1>
                <h1 className="animate__animated animate__bounceInDown strong">
                  López Barrera
                </h1>
                <h4 className="animate__animated animate__bounceInDown">
                  Desarrollador de Sofware
                </h4>
              </div>
            </div>
            <div className="col-6 center--info">
              <p className="animate__animated animate__fadeIn">
                <b>Sistemas y tecnologías Web</b>
              </p>
              <p className="animate__animated animate__fadeIn">
                Universidad del Valle de Guatemala
              </p>
              <p className="animate__animated animate__fadeIn">
                Proyecto 3
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3" id="about">
        <div className="col-12" style={{ marginLeft: "15%" }}>
          <h1>Acerca de mí</h1>
          <hr />
        </div>
      </div>
      <div className="row center--experience about--me">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </React.Fragment>
  );
};

export default About;

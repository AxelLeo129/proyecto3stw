import React from "react";
import logo_principal from "../../assets/img/logos/logo_principal.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <div className="w3-sidebar w3-bar-block" style={props.display}>
        <button
          onClick={() => props.setDisplay({ height: "100%", display: "none" })}
          className="w3-bar-item w3-large"
        >
          &times;
        </button>
        <img src={logo_principal} style={{ width: "100%" }} />
        <a href="#about" className="w3-bar-item w3-button">
          Acerca de
        </a>
        <a href="#abilities" className="w3-bar-item w3-button">
          Habilidades
        </a>
        <a href="#education" className="w3-bar-item w3-button">
          Educación
        </a>
        <a href="#expe" className="w3-bar-item w3-button">
          Experiencia Profesional
        </a>
        <a href="#projects" className="w3-bar-item w3-button">
          Proyectos
        </a>
        <div style={{ position: "absolute", bottom: "0" }}>
          <hr />
          <p className="m-3">Redes sociales / Contacto</p>
          <div className="m-3">
            <button className="btn">
              <a
                href="https://github.com/AxelLeo129"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </button>
            <button className="btn">
              <a
                href="https://www.linkedin.com/in/axel-leonardo-66355b175/"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </button>
            <button className="btn">
              <a
                href="mailto:axelleolpez@gmail.com"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

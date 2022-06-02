import React from "react";
import logo_principal from "../../assets/img/logos/logo_principal.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="w3-bar-block" style={{ height: "100%" }}>
        <img src={logo_principal} style={{ width: "100%" }} />
        <a href="#" className="w3-bar-item w3-button">
          Acerca de
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Habilidades
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Educación
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Experiencia Profesional
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Proyectos
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Intereses
        </a>
        <div style={{position: 'absolute', bottom: '0'}}>
        <hr />
        <p className="m-3">Redes sociales / Contacto</p>
        <div className="m-3">
          <button className="btn">
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

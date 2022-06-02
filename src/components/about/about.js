import React from "react";
import axel_foto from "../../assets/img/fotos/axel_lopez_formal.jpg";
import './about.scss';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';

const About = () => {
  return (
    <React.Fragment>
      <div>
        <div className="w3-container w3-blue-grey">
          <div className="row m-3">
            <div className="col-6 left--side">
              <img src={axel_foto} width="25%" className="animate__animated animate__fadeIn"/>
              <div className="left--side-titles ml--1">
                <h1 className="animate__animated animate__bounceInDown">Axel Leonardo</h1>
                <h1 className="animate__animated animate__bounceInDown strong">López Barrera</h1>
                <h4 className="animate__animated animate__bounceInDown">Desarrollador de Sofware</h4>
              </div>
            </div>
            <div className="col-6 right--side">
                <p className="animate__animated animate__bounceInRight">3429 - 0993 <FontAwesomeIcon icon={faPhone} /></p>
                <p className="animate__animated animate__bounceInRight">Guatemala <FontAwesomeIcon icon={faLocationDot} /></p>
                <p className="animate__animated animate__bounceInRight">axelleolpez@gmail.com <FontAwesomeIcon icon={faEnvelope} /></p>
                <p className="animate__animated animate__bounceInRight">Axel López <FontAwesomeIcon icon={faLinkedin} /></p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

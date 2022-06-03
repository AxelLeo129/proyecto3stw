import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./intereses.scss";

const Interests = () => {
  return (
    <React.Fragment>
      <div className="mt-3">
        <div className="w3-container w3-blue-grey">
          <div className="row m-3">
            <div className="col-12 footer">
              <p className="animate__animated animate__bounceInRight m-3">
                <a
                  href="tel:+50234290993"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  3429 - 0993 <FontAwesomeIcon icon={faPhone} />
                </a>
              </p>
              <p className="animate__animated animate__bounceInRight m-3">
                Guatemala <FontAwesomeIcon icon={faLocationDot} />
              </p>
              <p className="animate__animated animate__bounceInRight m-3">
                <a
                  href="mailto:axelleolpez@gmail.com"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  axelleolpez@gmail.com <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </p>
              <p className="animate__animated animate__bounceInRight m-3">
                <a
                  href="https://www.linkedin.com/in/axel-leonardo-66355b175/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Axel López <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </p>
              <p className="animate__animated animate__bounceInRight m-3">
                <a
                  href="https://github.com/AxelLeo129"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  AxelLeo129
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Interests;

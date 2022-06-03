import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import "./education.scss";
import { education_names } from "../utilities/constants";

const Education = () => {
  return (
    <React.Fragment>
      <div className="row w3-blue-grey" id="education">
        <div className="col-12 abilities--place">
          <div className="row">
            <div className="card" style={{ marginTop: "10%" }}>
              <div className="card-body">
                <FontAwesomeIcon
                  className="text--color--black"
                  size="lg"
                  icon={faBuildingColumns}
                />
                <h1 className="text--color--black">Educación</h1>
                {education_names.map((e, i) => (
                  <div className="row" key={i}>
                    <div className="col-6">
                      <h5 className="text-primary animate__animated animate__zoomIn">{e.duration}</h5>
                      <p className="text--color--black animate__animated animate__zoomIn">{e.where}</p>
                    </div>
                    <div className="col-6">
                      <h5 className="text-primary animate__animated animate__zoomIn">{e.career}</h5>
                      <h6 className="text--color--black animate__animated animate__zoomIn">{e.where}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;

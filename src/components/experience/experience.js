import React from "react";
import { laburo } from "../utilities/constants";
import './experience.scss';

const Experience = () => {
  return (
    <React.Fragment>
      <div className="row mt-3" id="expe">
        <div className="col-12" style={{ marginLeft: "15%" }}>
          <h1>Experiencia laboral</h1>
          <hr />
        </div>
      </div>
      <div className="row center--experience">
        <div className="col-12 center--experience--content">
          {laburo.map((e, i) => (
            <div className="row" key={i}>
              <div className="col-6 left--side">
                <img src={e.img} width="200px" />
              </div>
              <div className="col-6">
                <h2 className="animate__animated animate__bounceInRight">
                  {e.nombre}
                </h2>
                <h3 className="animate__animated animate__bounceInRight">
                  {e.duracion}
                </h3>
                <p className="animate__animated animate__bounceInRight">
                  {e.lugar}
                </p>
                <p className="animate__animated animate__bounceInRight">
                  {e.puesto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;

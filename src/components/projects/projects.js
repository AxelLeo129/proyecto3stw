import React from "react";
import img from "../../assets/img/fotos/axel_lopez_formal.jpg";
import "./projects.scss";
import { projects_done } from "../utilities/constants";

const Projects = () => {
  return (
    <React.Fragment>
      <div className="row mt-3" id="projects">
        <div className="col-12" style={{ marginLeft: "15%" }}>
          <h1>Proyectos destacados</h1>
          <hr />
        </div>
      </div>
      <div className="row row--projects">
        {projects_done.map((e, i) => (
          <div className="col-12 col-md-4" key={i} style={{marginBottom: '15px'}}>
            <div className="card--1">
              <a
                href={e.url}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <img src={e.img} alt="Avatar" style={{ width: "100%", height: "230px" }} />
                <div className="container--1">
                  <h4 className="text--color--black">
                    <b>{e.nombre}</b>
                  </h4>
                  <p className="text--color--black">{e.tech}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Projects;

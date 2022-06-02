import React from "react";
import "./Container.scss";
import Sidebar from "../sidebar/sidebar";
import About from "../about/about";
import Abilities from "../abilities/abilities";
import Education from "../education/education";

const Container = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <About />
          <Abilities />
          <Education />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Container;

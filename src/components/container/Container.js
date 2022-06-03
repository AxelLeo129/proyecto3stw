import React, { useState } from "react";
import "./Container.scss";
import Sidebar from "../sidebar/sidebar";
import About from "../about/about";
import Abilities from "../abilities/abilities";
import Education from "../education/education";
import Experience from "../experience/experience";
import Projects from "../projects/projects";
import Interests from "../interests/interests";

const Container = () => {
  const [display, setDisplay] = useState({ height: "100%", display: "none" });

  return (
    <React.Fragment>
      <Sidebar display={display} setDisplay={setDisplay} />
      <About setDisplay={setDisplay} />
      <Abilities />
      <Education />
      <Experience />
      <Projects />
      <Interests />
    </React.Fragment>
  );
};

export default Container;

import React, { useState } from "react";
import { abilities_tech } from "../utilities/constants";
import "./abilities.scss";

const Abilities = () => {
  const [grid, setGrid] = useState(abilities_tech);
  const flipCard = (i) => {
    const gridCopy = [...grid];
    gridCopy[i].style = { transform: "rotateY(180deg)" };
    setGrid(gridCopy);
  };

  const flipCard1 = (i) => {
    const gridCopy = [...grid];
    gridCopy[i].style = null;
    setGrid(gridCopy);
  };

  return (
    <React.Fragment>
      <div className="row mt-3" id="abilities">
        <div className="col-12" style={{marginLeft: '15%'}}>
          <h1>Habilidades</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 abilities--place">
          <div className="grid--container">
            {grid.map((e, i) => (
              <div className="grid--item" key={i}>
                <div className="main--container">
                  <div className="card--container" style={e.style}>
                    <div className="front">
                      <img
                        onMouseLeave={() => flipCard1(i)}
                        onMouseEnter={() => flipCard(i)}
                        className="star--img"
                        src={e.img}
                      />
                    </div>
                    <div className="back">
                      <p>
                        <a
                          href={e.url}
                          target="_blank"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {e.name}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Abilities;

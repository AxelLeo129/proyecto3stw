import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./startApp.css";
import Container from "./container/Container";

class StartApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="global">
          <Container />
        </div>
      </React.Fragment>
    );
  }
}

export default StartApp;

import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Row, Col } from "reactstrap";

import ReactAnimatedInteraction from "../../src";

class Demo extends Component {
  state = {
    Show: false
  };

  showHide = () => {
    this.setState({ Show: !this.state.Show });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>react animated interaction Demo</h1>
            Click here to:{" "}
            <input type="button" value="Show/Hide" onClick={this.showHide} />
            <ReactAnimatedInteraction Show={this.state.Show}>
              Hello there, nice to meet you!
            </ReactAnimatedInteraction>
          </Col>
          <Col>.col</Col>
        </Row>
      </Container>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

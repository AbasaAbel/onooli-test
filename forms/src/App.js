

import React from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Routes childProps={this.state} />
        <div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);


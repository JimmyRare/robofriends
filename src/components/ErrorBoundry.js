import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <h1>Ooopa, there is an error!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;

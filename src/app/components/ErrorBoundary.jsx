import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hashError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hashError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hashError) {
      return <h1>An error occurred, please refresh the page.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('error: ', error);
    console.error('errorInfo: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p className="text-danger">Something went wrong</p>
        </div>
      );
    }
    return this.props.children;
  }
}

import { Component } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default ErrorBoundary;

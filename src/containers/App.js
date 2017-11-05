import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { textCheck, numbersCheck } from '../actions/index';
import Dashboard from '../components';

class App extends React.Component {
  static propTypes ={
    errorMessageNumbers: PropTypes.string,
    errorMessageText: PropTypes.string,
    validatorText: PropTypes.func.isRequired,
    validatorNumbers: PropTypes.func.isRequired,
  }
  render() {
    const {
      errorMessageNumbers, errorMessageText, validatorText, validatorNumbers,
    } = this.props;

    return (
      <div>
        <Dashboard
          TextAction={validatorText}
          TextIsError={!!errorMessageText}
          TextErrorMessage={errorMessageText}

          NumberAction={validatorNumbers}
          NumberIsError={!!errorMessageNumbers}
          NumberMessage={errorMessageNumbers}
        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessageText: state.errorMessageText,
    errorMessageNumbers: state.errorMessageNumbers,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    validatorText: textCheck,
    validatorNumbers: numbersCheck,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(App);


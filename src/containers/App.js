import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { textCheck, numbersCheck, strictTextCheck } from '../actions/index';
import Dashboard from '../components';

class App extends React.Component {
  static propTypes ={
    errorMessageNumbers: PropTypes.string,
    errorMessageText: PropTypes.string,
    validatorText: PropTypes.func.isRequired,
    validatorNumbers: PropTypes.func.isRequired,
    validatorStrictText: PropTypes.func.isRequired,
    strictText: PropTypes.string,
  }
  render() {
    const {
      errorMessageNumbers, errorMessageText, validatorText, validatorNumbers, validatorStrictText,
      strictText,
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

          StrictTextAction={validatorStrictText}
          valueStrictText={strictText}


        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessageText: state.errorMessageText,
    errorMessageNumbers: state.errorMessageNumbers,
    strictText: state.strictText,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    validatorText: textCheck,
    validatorNumbers: numbersCheck,
    validatorStrictText: strictTextCheck,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(App);


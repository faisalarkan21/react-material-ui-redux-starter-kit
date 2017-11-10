import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onlyTextCheck, onlyNumbersCheck, strictTextCheck } from '../actions/index';
import ManualComponent from '../components/components-index';

class customComponent extends React.Component {
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
      errorMessageNumbers,
      errorMessageText,
      validatorText,
      validatorNumbers,
      validatorStrictText,
      strictText,
    } = this.props;

    return (
      <div>
        <ManualComponent
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
    validatorText: onlyTextCheck,
    validatorNumbers: onlyNumbersCheck,
    validatorStrictText: strictTextCheck,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(customComponent);


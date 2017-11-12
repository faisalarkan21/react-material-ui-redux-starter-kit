import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onlyTextCheck, onlyNumbersCheck, strictTextCheck } from '../actions/index';
import ManualComponent from '../components/components-index';

class customComponent extends React.Component {
  static propTypes ={
    validatorText: PropTypes.func.isRequired,
    validatorNumbers: PropTypes.func.isRequired,
    validatorStrictText: PropTypes.func.isRequired,
    reducerCheck: PropTypes.shape({
      errorMessageText: PropTypes.string,
      errorStatusText: PropTypes.bool,
      errorMessageNumbers: PropTypes.string,
      errorStatusNumber: PropTypes.bool,
      strictText: PropTypes.string,
    }),
  }


  render() {
    const {
      reducerCheck,
      validatorText,
      validatorNumbers,
      validatorStrictText,
    } = this.props;

    return (
      <div>
        <ManualComponent
          TextAction={validatorText}
          TextIsError={reducerCheck.errorStatusText}
          TextErrorMessage={reducerCheck.errorMessageText}

          NumberAction={validatorNumbers}

          NumberMessage={reducerCheck.errorMessageNumbers}
          NumberIsError={reducerCheck.errorStatusNumber}

          StrictTextAction={validatorStrictText}
          valueStrictText={reducerCheck.strictText}
        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    reducerCheck: state.reducerCheck,
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


import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rulesValidator } from '../actions/index';
import Dashboard from '../components';

class TextFieldMod extends React.Component {
  static propTypes ={
    errorMessage: PropTypes.string,
    validator: PropTypes.func.isRequired,
  }
  render() {
    const { errorMessage, validator } = this.props;
    return (
      <div>
        <Dashboard />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ validator: rulesValidator }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(TextFieldMod);


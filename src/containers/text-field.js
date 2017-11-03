import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rulesValidator } from '../actions/index';

class TextFieldMod extends React.Component {
  static propTypes ={
    status: PropTypes.bool.isRequired,
    messageError: PropTypes.string,
    validator: PropTypes.func.isRequired,
  }
  render() {
    const { messageError, validator } = this.props;
    return (
      <div>
        <TextField
          label={messageError}
          onChange={validator}
        />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    messageError: state.messageError,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ validator: rulesValidator }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(TextFieldMod);


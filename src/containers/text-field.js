import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rulesValidator } from '../actions/index';

class TextFieldMod extends React.Component {
  static propTypes ={
    errorMessage: PropTypes.string,
    validator: PropTypes.func.isRequired,
  }
  render() {
    const { errorMessage, validator } = this.props;
    return (
      <div>
        <TextField
          error={!!errorMessage}
          label="Nama anda"
          helperText={errorMessage}
          onChange={validator}
        />
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


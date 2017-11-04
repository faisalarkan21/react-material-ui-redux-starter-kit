import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import globalStyle from './style';


function TextFieldMod(props) {
  return (
    <TextField
      style={globalStyle.textField}
      label={props.label}
      error={props.isError}
      helperText={props.errorMessage}
      onChange={props.action}
    />
  );
}

TextFieldMod.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,

};


export { TextFieldMod };

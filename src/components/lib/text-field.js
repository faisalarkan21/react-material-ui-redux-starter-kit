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
  label: PropTypes.string,
  isError: PropTypes.string,
  errorMessage: PropTypes.string,

};


export { TextFieldMod };

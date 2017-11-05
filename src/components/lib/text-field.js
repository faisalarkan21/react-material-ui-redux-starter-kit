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
      InputLabelProps={{
            shrink: props.isFloating,
      }}
      placeholder={props.placeholder}
      helperText={props.errorMessage}
      className="textfield-mobile"
      onChange={props.action}
    />
  );
}

TextFieldMod.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  isFloating: PropTypes.bool,
  placeholder: PropTypes.string,
};


export { TextFieldMod };

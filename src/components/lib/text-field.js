import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import NumberFormat from 'react-number-format';


import globalStyle from './style';
import { NumberFormatRp } from '../../middleware/FormatCustom';


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


function TextFieldRupiah(props) {
  return (
    <FormControl style={globalStyle.textField}>
      <InputLabel shrink htmlFor="currency">{props.label}</InputLabel>
      <Input
        id="currency"
        placeholder="Rp. 0,00"
        inputComponent={NumberFormatRp}
      />
    </FormControl>
  );
}


TextFieldRupiah.propTypes = {
  label: PropTypes.string,
};


function TextFieldStrictNum(props) {
  return (
    <FormControl style={globalStyle.textField}>
      <InputLabel shrink htmlFor="strictNumber">{props.label}</InputLabel>
      <Input
        id="strictNumber"
        placeholder={props.placeholder}
        inputComponent={NumberFormat}
      />
    </FormControl>
  );
}

TextFieldStrictNum.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};


export { TextFieldMod, TextFieldRupiah, TextFieldStrictNum };

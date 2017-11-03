import React from 'react';
import TextField from 'material-ui/TextField';
import globalStyle from './style';


function TextFieldMod(props) {
  return (
    <TextField style={globalStyle.textField} />
  );
}

export { TextFieldMod };

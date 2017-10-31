import React from 'react';
import Typography from 'material-ui/Typography';
import globalStyle from './style';

function CodeStyleMod(props) {
  return (
    <code style={globalStyle.codeStyle}>{props.text}</code>
  );
}

function DisplayMod1(props) {
  return (
    <Typography style={globalStyle.display1} type="display1" component="h3">
      {props.text}
      {props.children}
    </Typography>
  );
}

export { CodeStyleMod, DisplayMod1 };

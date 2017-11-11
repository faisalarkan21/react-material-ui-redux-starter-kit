import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import globalStyle from './style';

function CodeStyleMod(props) {
  return (
    <code style={globalStyle.codeStyle}>{props.text}</code>
  );
}

CodeStyleMod.propTypes = {
  text: PropTypes.string,
};


function DisplayMod1(props) {
  return (
    <Typography className="main-title" style={globalStyle.styleFont1} type="display1" component="h3">
      {props.text}
      {props.children}
    </Typography>
  );
}

DisplayMod1.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

function DisplayMod2(props) {
  return (
    <Typography style={globalStyle.styleFont2} type="subheading" component="h3">
      {props.text}
      {props.children}
    </Typography>
  );
}

DisplayMod2.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};


export { CodeStyleMod, DisplayMod1, DisplayMod2 };

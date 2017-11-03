import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import globalStyle from './style';

function PaperMod(props) {
  return (
    <Paper style={globalStyle.paper} elevation={props.elevation}>
      {props.children}
    </Paper>
  );
}


PaperMod.propTypes = {
  elevation: PropTypes.number,
  children: PropTypes.node,
};


export { PaperMod };

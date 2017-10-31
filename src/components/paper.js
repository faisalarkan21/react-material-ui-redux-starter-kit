import React from 'react';
import Paper from 'material-ui/Paper';

import globalStyle from './style';

function PaperMod(props) {
  return (
    <Paper style={globalStyle.paper} elevation={props.elevation}>
      {props.children}
    </Paper>
  );
}

export { PaperMod };

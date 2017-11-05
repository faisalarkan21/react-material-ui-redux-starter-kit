import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-flexbox-grid/lib';

import globalStyle from './style';

function ColMod(props) {
  return (
    <Col style={globalStyle.col}>
      {props.children}
    </Col>
  );
}

ColMod.propTypes = {
  children: PropTypes.node,
};

export { ColMod };

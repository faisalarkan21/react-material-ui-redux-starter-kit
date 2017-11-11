import React from 'react';
import List from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import PropTypes from 'prop-types';

import globalStyle from './style';


function ListMod(props) {
  return (
    <div style={globalStyle.list} >
      <List subheader={<ListSubheader style={globalStyle.headerList}>{props.headerList}</ListSubheader>}>
        {props.children}
      </List>
    </div>
  );
}

ListMod.propTypes = {
  headerList: PropTypes.string.isRequired,
  children: PropTypes.node,
};


export { ListMod };

import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import BeenhereIcon from 'material-ui-icons/Beenhere';

import { ColMod, ListMod, DisplayMod1, CodeStyleMod, DividerMod, PaperMod } from './lib';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <ColMod xs md lg={9} lgOffset={1}>
              <PaperMod elevation={19}>
                <Row >
                  <DisplayMod1 text="React Material UI">
                    <CodeStyleMod text="Example" />
                  </DisplayMod1>
                </Row>
                <DividerMod />
                <ListMod headerList="List Component" >
                  <ListItem button component={Link} to="/custom-components">
                    <ListItemIcon >
                      <BeenhereIcon />
                    </ListItemIcon>
                    <ListItemText primary="Custom Material UI With Redux" />
                  </ListItem>
                  <ListItem button component={Link} to="/redux-form" >
                    <ListItemIcon>
                      <BeenhereIcon />
                    </ListItemIcon>
                    <ListItemText primary="Redux Form" />
                  </ListItem>
                </ListMod>
              </PaperMod>
            </ColMod>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Dashboard;

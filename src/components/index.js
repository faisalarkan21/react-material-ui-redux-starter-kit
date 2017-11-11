import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-flexbox-grid';
import {

  Link,
} from 'react-router-dom';

import { ColMod, DisplayMod1, DisplayMod2, TextFieldRupiah, TextFieldStrictNum, TextFieldMaskText, CodeStyleMod, DividerMod, PaperMod, TextFieldMod } from './lib';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <ColMod xs={12} md={8} lg={9} lgOffset={1} >
            <PaperMod elevation={19}>
              <Row >
                <DisplayMod1 text="React Redux Material UI">
                  <CodeStyleMod text="Example" />
                </DisplayMod1>
              </Row>
              <DividerMod />

              <Link to="/custom-components"><DisplayMod2 text="Custom Material UI With Redux" /> </Link>
              <Link to="/redux-form"><DisplayMod2 text="Redux Form" /> </Link>

            </PaperMod>
          </ColMod>
        </Grid>
      </div>
    );
  }
}


export default Dashboard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-flexbox-grid';
import { ColMod, DisplayMod1, TextFieldRupiah, TextFieldStrictNum, TextFieldMaskText, CodeStyleMod, DividerMod, PaperMod, TextFieldMod } from './lib';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <ColMod xs={12} md={8} lg={9} lgOffset={1} >
            <PaperMod elevation={19}>
              <Row >
                <DisplayMod1 text="React - Redux Material UI">
                  <CodeStyleMod text="Example" />
                </DisplayMod1>
              </Row>
              <DividerMod />


            </PaperMod>
          </ColMod>
        </Grid>
      </div>
    );
  }
}


export default Dashboard;

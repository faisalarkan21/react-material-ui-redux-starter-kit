import React, { Component } from 'react';
// import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { DisplayMod1, DisplayMod2, CodeStyleMod, DividerMod, PaperMod, TextFieldMod } from './lib';


class Dashboard extends Component {
  render() {
    return (

      <div>
        <Grid>
          <Col mdOffset={1} md={10}>
            <PaperMod elevation={19}>
              <Row >
                <DisplayMod1 text="Components ">
                  <CodeStyleMod text="Material UI" />
                </DisplayMod1>
              </Row>
              <DividerMod />
              <Row>
                <Col >
                  <DisplayMod2 text="Text Only, With Warning" />
                  <TextFieldMod
                    label="Your name.. "
                    isError={this.props.TextIsError}
                    errorMessage={this.props.TextErrorMessage}
                    action={this.props.TextAction}
                  />
                </Col>
                <Col mdOffset={1} >
                  <DisplayMod2 text="Text Only, With Warning" />
                  <TextFieldMod
                    label="Your name.. "
                    isError={this.props.TextIsError}
                    errorMessage={this.props.TextErrorMessage}
                    action={this.props.TextAction}
                  />
                </Col>
              </Row>
            </PaperMod>
          </Col>
        </Grid>


      </div>


    );
  }
}


Dashboard.propTypes = {
  TextAction: PropTypes.func.isRequired,
  TextIsError: PropTypes.bool,
  TextErrorMessage: PropTypes.string,

};


export default Dashboard;

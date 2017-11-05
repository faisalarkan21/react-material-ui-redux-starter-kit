import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { DisplayMod1, DisplayMod2, CodeStyleMod, DividerMod, PaperMod, TextFieldMod } from './lib';


class Dashboard extends Component {
  render() {
    return (

      <div>
        <Grid>
          <Col xs={12} md={8} lg={9} lgOffset={2} >
            <PaperMod elevation={19}>
              <Row >
                <DisplayMod1 text="Material UI">
                  <CodeStyleMod text="Components" />
                </DisplayMod1>
              </Row>
              <DividerMod />
              <Row>
                <Col>
                  <TextFieldMod
                    label="Text only type 1"
                    placeholder="Your name.. "
                    iconsType="fa-eercast"
                    isFloating
                    isError={this.props.TextIsError}
                    errorMessage={this.props.TextErrorMessage}
                    action={this.props.TextAction}
                  />
                </Col>
                <Col lgOffset={1} >
                  <TextFieldMod
                    label="Numbers Only type 1"
                    placeholder="Some numbers.. "
                    iconsType="fa-user-circle-o"
                    isFloating
                    isError={this.props.NumberIsError}
                    errorMessage={this.props.NumberMessage}
                    action={this.props.NumberAction}
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
  NumberAction: PropTypes.func.isRequired,
  NumberIsError: PropTypes.bool,
  NumberMessage: PropTypes.string,

};


export default Dashboard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-flexbox-grid';
import { ColMod, DisplayMod1, TextFieldRupiah, CodeStyleMod, DividerMod, PaperMod, TextFieldMod } from './lib';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <ColMod xs={12} md={8} lg={9} lgOffset={1} >
            <PaperMod elevation={19}>
              <Row >
                <DisplayMod1 text="Material UI">
                  <CodeStyleMod text="Components" />
                </DisplayMod1>
              </Row>
              <DividerMod />
              <Row>
                <ColMod>
                  <TextFieldMod
                    label="Text only type 1"
                    placeholder="Your name.. "
                    isFloating
                    isError={this.props.TextIsError}
                    errorMessage={this.props.TextErrorMessage}
                    action={this.props.TextAction}
                  />
                </ColMod>
                <ColMod lgOffset={0} >
                  <TextFieldMod
                    label="Numbers Only type 1"
                    placeholder="Some numbers.. "
                    isFloating
                    isError={this.props.NumberIsError}
                    errorMessage={this.props.NumberMessage}
                    action={this.props.NumberAction}
                  />
                </ColMod>
                <ColMod lgOffset={0} >
                  <TextFieldRupiah
                    label="Currency Format."
                    isFloating
                    isError={this.props.NumberIsError}
                    errorMessage={this.props.NumberMessage}
                    action={this.props.NumberAction}
                  />
                </ColMod>
              </Row>
            </PaperMod>
          </ColMod>
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

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
                <DisplayMod1 text="React Material UI">
                  <CodeStyleMod text="Components" />
                </DisplayMod1>
              </Row>
              <DividerMod />
              <Row>
                <ColMod>
                  <TextFieldMod
                    label="Warning Text only"
                    placeholder="Type Some text.. "
                    isFloating
                    isError={this.props.TextIsError}
                    errorMessage={this.props.TextErrorMessage}
                    action={this.props.TextAction}
                  />
                </ColMod>
                <ColMod lgOffset={0} >
                  <TextFieldMod
                    label="Warning Numbers Only"
                    placeholder="Type Some numbers.. "
                    isFloating
                    isError={this.props.NumberIsError}
                    errorMessage={this.props.NumberMessage}
                    action={this.props.NumberAction}
                  />
                </ColMod>
                <ColMod>
                  <TextFieldRupiah
                    label="Currency Format."
                  />
                </ColMod>
              </Row>
              <Row>
                <ColMod >
                  <TextFieldMod
                    label="Strict Text Only"
                    placeholder="Type Some text.. "
                    isFloating
                    value={this.props.valueStrictText}
                    action={this.props.StrictTextAction}
                  />
                </ColMod>
                <ColMod>
                  <TextFieldStrictNum
                    label="Strict Numbers Only"
                    isFloating
                    placeholder="Type Some numbers.. "
                    isError={this.props.NumberIsError}
                    errorMessage={this.props.NumberMessage}
                    action={this.props.NumberAction}
                  />
                </ColMod>
                <ColMod >
                  <TextFieldMaskText
                    label="Phone Number Input Mask "
                    placeholder="(555) 123-4444"
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
  StrictTextAction: PropTypes.func.isRequired,
  NumberAction: PropTypes.func.isRequired,
  TextIsError: PropTypes.bool,
  TextErrorMessage: PropTypes.string,
  NumberIsError: PropTypes.bool,
  NumberMessage: PropTypes.string,
  valueStrictText: PropTypes.string,

};


export default Dashboard;

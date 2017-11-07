import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-flexbox-grid';
import { ColMod, DisplayMod1, TextFieldRupiah, TextFieldStrictNum, CodeStyleMod, DividerMod, PaperMod, TextFieldMod } from './lib';


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
                    label="Text only type 1"
                    placeholder="Type Some text.. "
                    isFloating
                    isError={this.props.TextIsError}
                    errorMessage={this.props.TextErrorMessage}
                    action={this.props.TextAction}
                  />
                </ColMod>
                <ColMod lgOffset={0} >
                  <TextFieldMod
                    label="Numbers Only type 1"
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
                    isFloating
                    isError={this.props.NumberIsError}
                    errorMessage={this.props.NumberMessage}
                    action={this.props.NumberAction}
                  />
                </ColMod>
              </Row>
              <Row>
                <ColMod >
                  <TextFieldStrictNum
                    label="Only Text Only Type 1"
                    isFloating
                    placeholder="Type Some text.. "
                    isError={this.props.NumberIsError}
                    errorMessage={this.props.NumberMessage}
                    action={this.props.NumberAction}
                  />
                </ColMod>

                <ColMod>
                  <TextFieldStrictNum
                    label="Numbers Only Type 2"
                    isFloating
                    placeholder="Type Some numbers.. "
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

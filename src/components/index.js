import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { DisplayMod1, CodeStyleMod, DividerMod, PaperMod, TextFieldMod } from './lib';


class Dashboard extends Component {
  render() {
    return (

      <div>
        <Grid container justify="center" spacing={8}>
          <Grid item xs={8}>
            <PaperMod elevation={19}>
              <DisplayMod1 text="Test Komponent">
                <CodeStyleMod text="Material UI" />
              </DisplayMod1>
              <DividerMod />


              <TextFieldMod
                label="Nama anda"
                isError={this.props.TextIsError}
                errorMessage={this.props.TextErrorMessage}
                action={this.props.TextAction}
              />


            </PaperMod>
          </Grid>
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

import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
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


              <TextFieldMod label="Nama anda"  />


            </PaperMod>
          </Grid>
        </Grid>
      </div>


    );
  }
}


export default Dashboard;

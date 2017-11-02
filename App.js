import React from 'react';
import Grid from 'material-ui/Grid';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Counter from './src/components/Counter';
import * as actions from './src/lib/Counter.action';
import reducers from './src/lib/reducers';
import { DisplayMod1, CodeStyleMod, DividerMod, PaperMod, TextFieldMod, Greeting } from './src/components/';

const store = createStore(reducers);

class ListKomponent extends React.Component {
  render() {
    const { count, increment, decrement } = this.props;

    return (


      <Grid container justify="center" spacing={8}>
        <Grid item xs={8}>
          <PaperMod elevation={19}>
            <DisplayMod1 text="List Komponen">
              <CodeStyleMod text="Material UI" />
            </DisplayMod1>
            <DividerMod />


            <TextFieldMod label="Nama Anda" />

          </PaperMod>
        </Grid>
      </Grid>


    );
  }
}


function mapStateToProps(state) {
  return {
    count: state,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ListKomponent);

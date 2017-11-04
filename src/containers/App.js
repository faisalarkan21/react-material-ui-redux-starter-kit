import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import { DisplayMod1, CodeStyleMod, DividerMod, PaperMod, TextFieldMod } from '../components/lib';

import { rulesValidator } from '../actions/index';
import Dashboard from '../components';

class App extends React.Component {
  static propTypes ={
    errorMessage: PropTypes.string,
    validator: PropTypes.func.isRequired,
  }
  render() {
    const { errorMessage, validator } = this.props;
    return (
      <div>
        <Dashboard TextAction={validator} TextErrorMessage="asas" />


      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ validator: rulesValidator }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(App);


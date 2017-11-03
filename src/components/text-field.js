import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText } from 'material-ui/Form';


class TextFieldMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyText: '',

    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  message;
  errorMessage;
  errorStatus;

  handleChange(event) {
    this.setState({ onlyText: event.target.value });
    const valueText = event.target.value;

    if (valueText === '') {
      this.errorMessage = 'Tidak boleh kosong';
      this.errorStatus = true;
    } else if (!validator.regex.onlyString.test(valueText)) {
      this.errorMessage = 'Harus Huruf';
      this.errorStatus = true;
    } else {
      this.errorMessage = '';
      this.errorStatus = false;
    }
  }

  render() {
    const {
      value, label,
    } = this.props;

    return (
      <div>

        <h3> {this.message} </h3>
        <h3> {this.state.onlyText} </h3>


        <FormControl error={this.errorStatus} >
          <InputLabel htmlFor="name-simple">{label}</InputLabel>
          <Input id="name-simple" value={value} onChange={this.handleChange} />
          <FormHelperText>{this.errorMessage}</FormHelperText>
        </FormControl>
      </div>

    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: state.activeUser,
//   };
// }

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ selectUser }, dispatch);
// }


TextFieldMod.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,

};


export { TextFieldMod };
// export default connect(mapStateToProps, matchDispatchToProps)(TextFieldMod);

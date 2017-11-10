import React from 'react';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask';

class NumberFormatRp extends React.Component {
  render() {
    return (
      <NumberFormat
        {...this.props}
        thousandSeparator="."
        decimalScale={2}
        decimalSeparator=","
        fixedDecimalScale
        prefix="Rp. "
      />
    );
  }
}


class TextMaskCustomPhone extends React.Component {
  render() {
    return (
      <MaskedInput
        {...this.props}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}

      // Unicode should using curly braces.
      // eslint-disable-next-line
      placeholderChar={'\u2000'}
      />
    );
  }
}

export { NumberFormatRp, TextMaskCustomPhone };


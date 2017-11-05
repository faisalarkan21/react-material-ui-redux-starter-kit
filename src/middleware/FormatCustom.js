import NumberFormat from 'react-number-format';
import React from 'react';


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

export { NumberFormatRp };


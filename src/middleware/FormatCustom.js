import React from 'react';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask';


function NumberFormatRp(props) {
  return (
    <NumberFormat
      {...props}
      thousandSeparator="."
      decimalScale={2}
      decimalSeparator=","
      fixedDecimalScale
      prefix="Rp. "
    />
  );
}

function TextMaskCustomPhone(props) {
  return (
    <MaskedInput
      {...props}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}

      // Unicode should using curly braces.
      // eslint-disable-next-line
      placeholderChar={'\u2000'}           
    />
  );
}

export { NumberFormatRp, TextMaskCustomPhone };


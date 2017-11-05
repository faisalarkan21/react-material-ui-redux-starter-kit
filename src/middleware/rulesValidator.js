const filterRegex = {
  String: /^[a-zA-Z]+$/,
  Number: /^[0-9\b]+$/,
};


const customMessage = {
  OnlyString: {
    statusError: 'Input only characters..',
  },
  OnlyNumber: {
    statusError: 'Input only numbers..',
  },
  statusNull: 'Input is required..',
};


function errorMessage(err) {
  switch (err) {
    case 'onlyString':
      return customMessage.OnlyString.statusError;
    case 'onlyNumber':
      return customMessage.OnlyNumber.statusError;
    case 'notNull':
      return customMessage.statusNull;
    default:
      return '';
  }
}

module.exports = {
  errorMessage, filterRegex,
};


const filterRegex = {
  String: /^[a-zA-Z]+$/,
  Number: /^[0-9\b]+$/,
};


const customMessage = {
  statusStringError: 'Input only characters..',
  statusNumError: 'Input only numbers..',
  statusNull: 'Input is required..',
};


module.exports = {
  customMessage, filterRegex,
};


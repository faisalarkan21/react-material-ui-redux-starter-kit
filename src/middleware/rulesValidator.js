const filterRegex = {
  String: /^[a-zA-Z]+$/,
};


const customMessage = {
  OnlyString: {
    statusError: 'Input Hanya Boleh Huruf',

  },
  statusNull: 'Input Tidak Boleh Kosong',
};


function errorMessage(err) {
  switch (err) {
    case 'onlyString':
      return customMessage.OnlyString.statusError;
    case 'notNull':
      return customMessage.statusNull;
    default:
      return '';
  }
}

module.exports = {
  errorMessage, filterRegex,
};


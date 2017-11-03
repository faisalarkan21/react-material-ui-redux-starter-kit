
const filterRegex = {
  String: /^[a-zA-Z]+$/,
};


const customMessage = {
  OnlyString: {
    statusError: 'Input Hanya Boleh Huruf',
    statusNull: 'Input Tidak Boleh Kosong',
  },
};


function messageError(err) {
  console.log(customMessage.OnlyString);
  switch (err) {
    case 'onlyString':
      return customMessage.OnlyString.statusError;
    case 'notNull':
      return customMessage.OnlyString.statusNull;
    default:
      return '';
  }
}

module.exports = {
  messageError, filterRegex,
};


const filterRegex = {
  String: /^[a-zA-Z\s]+$/,
  Number: /^[0-9\b]+$/,
};


const customMessage = {
  stringError: 'Input only letter..',
  numberError: 'Input only numbers..',
  nullError: 'Input is required..',

};

function parseMessage(key = '', err = false) {
  return Object.assign({
    message: customMessage[key],
    isError: err,
  });
}

export {
  customMessage, filterRegex, parseMessage,
};


const path = require('path');

module.exports = {
  entry: './js/script.js',
  output: {
    filename: 'script1.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

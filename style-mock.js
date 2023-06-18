
const path = require('path');

module.exports = {
  // ...other Jest configurations

  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@styles/(.*)$': path.resolve(__dirname, './styles/$1'),
  },
};

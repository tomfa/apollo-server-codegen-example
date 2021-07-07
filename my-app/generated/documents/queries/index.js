const fs = require('fs');
const path = require('path');

module.exports.getCustomerByEmail = fs.readFileSync(path.join(__dirname, 'getCustomerByEmail.gql'), 'utf8');

const fs = require('fs');
const path = require('path');

module.exports.addCustomer = fs.readFileSync(path.join(__dirname, 'addCustomer.gql'), 'utf8');

const constant = require('../lib/constant');

const logger = (type, message) => {
    console.log(constant.COLOR[type], `[tsnode] ${message}`);
}

module.exports = logger; 
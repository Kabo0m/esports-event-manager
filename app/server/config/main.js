var devMode = true;

module.exports = require('./' + (devMode ? 'dev.js' : 'prod.js'));
module.exports.devMode = devMode;

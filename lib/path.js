const os = require('os');
const path = require('path');

const SOLENOPSIS_BASE = path.join(os.homedir(), '.solenopsis/');
const CREDENTIALS_BASE = path.join(SOLENOPSIS_BASE, 'credentials');

/**
 * Gets the credentials filename
 * @param {String} environment The environement name
 * @returns {String} The filename
 */
function getCredentialsFilename(environment) {
    return path.join(CREDENTIALS_BASE, `${environment}.properties`);
}

module.exports = {
    getCredentialsFilename: getCredentialsFilename
};
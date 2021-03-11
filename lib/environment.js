const fs = require('fs');
const ini = require('ini');

const path = require('./path');

/**
 * A salesforce environment
 */
class Environment {
    /**
     * Loads the environment data from disk
     * @returns {Promise} A promise for when the environment data has been loaded
     */
    load() {
        const environment_name = this.name;

        return new Promise(function (resolve, reject) {
            const file_path = path.getCredentialsFilename(environment_name);

            fs.readFile(file_path, function (error, data) {
                if (error) {
                    reject(error);
                    return;
                }

                const config = ini.parse(data.toString());

                const credentials = {
                    username: config.username,
                    token: config.token,
                    password: config.password,
                    url: config.url
                };

                resolve(credentials);
            });
        });
    }

    /**
     * Sets up the environment
     * @param {String} name The environement name
     */
    constructor(name) {
        this.name = name;
    }
}

module.exports = Environment;
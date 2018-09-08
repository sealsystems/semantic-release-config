'use strict';

const result = require('./generic');

// Releases of modules may be ignored by the CI
/* eslint-disable no-template-curly-in-string */
result.prepare[1].message = '[ci skip] ${result.prepare[1].message}';
/* eslint-enable no-template-curly-in-string */

result.verifyConditions.splice(1, 0, '@semantic-release/npm');
result.prepare.splice(1, 0, '@semantic-release/npm');

module.exports = result;
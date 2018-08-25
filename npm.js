'use strict';

const result = require('./binary');

result.verifyConditions.splice(1, 0, '@semantic-release/npm');
result.prepare.splice(1, 0, '@semantic-release/npm');

module.exports = result;

'use strict';

const cloneDeep = require('clone-deep');

const generic = require('./generic');
const result = cloneDeep(generic);

result.verifyConditions.splice(1, 0, '@semantic-release/npm');
result.prepare.splice(1, 0, '@semantic-release/npm');
result.npmPublish = false;

module.exports = result;

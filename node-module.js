'use strict';

const cloneDeep = require('clone-deep');

const nodeBinary = require('./node-binary');
const result = cloneDeep(nodeBinary);

// // Releases of modules may be ignored by the CI
// /* eslint-disable no-template-curly-in-string */
// result.prepare[2].message = `[ci skip] ${result.prepare[2].message}`;
// /* eslint-enable no-template-curly-in-string */
result.npmPublish = true;

module.exports = result;

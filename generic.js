'use strict';

const changelogTemplate = require('./changelog-template.js');

module.exports = {
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/git'
  ],
  prepare: [
    '@semantic-release/changelog',
    {
      path: '@semantic-release/git',
      /* eslint-disable no-template-curly-in-string */
      message: 'Release ${nextRelease.version}'
      /* eslint-enable no-template-curly-in-string */
    }
  ],
  /* eslint-disable no-template-curly-in-string */
  tagFormat: '${version}',
  /* eslint-enable no-template-curly-in-string */
  analyzeCommits: {
    preset: 'angular',
    parserOpts: {
      noteKeywords: [ 'BREAKING CHANGES' ]
    },
    releaseRules: [
      { type: 'chore', release: 'patch' }
    ]
  },
  generateNotes: {
    preset: 'angular',
    parserOpts: {
      issuePrefixes: [ 'gh-', 'jira-' ],
      noteKeywords: [ 'BREAKING CHANGES' ],
      referenceActions: null
    },
    writerOpts: changelogTemplate
  }
};

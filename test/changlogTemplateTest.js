'use strict';

const assert = require('assertthat');

const changelogTemplate = require('../changelog-template');

suite('changelogTemplate', () => {
  test('is an object', async () => {
    assert.that(changelogTemplate).is.ofType('object');
  });

  test('contains the expected contents.', async () => {
    /* eslint-disable */
    const expected =
{
  transform: (commit, context) => {
    let discard = true;
    const issues = [];

    commit.notes.forEach((note) => {
      note.title = `BREAKING CHANGES`;
      discard = false;
    });

    if (commit.type === `feat`) {
      commit.type = `Features`;
    } else if (commit.type === `fix`) {
      commit.type = `Bug Fixes`;
    } else if (commit.type === `perf`) {
      commit.type = `Performance Improvements`;
    } else if (commit.type === `chore`) {
      commit.type = `Chores`;
    } else if (commit.type === `revert`) {
      commit.type = `Reverts`;
    } else if (discard) {
      return;
    } else if (commit.type === `docs`) {
      commit.type = `Documentation`;
    } else if (commit.type === `style`) {
      commit.type = `Styles`;
    } else if (commit.type === `refactor`) {
      commit.type = `Code Refactoring`;
    } else if (commit.type === `test`) {
      commit.type = `Tests`;
    } else if (commit.type === `build`) {
      commit.type = `Build System`;
    } else if (commit.type === `ci`) {
      commit.type = `Continuous Integration`;
    }

    if (commit.scope === `*`) {
      commit.scope = ``;
    }

    if (typeof commit.hash === `string`) {
      commit.hash = commit.hash.substring(0, 7);
    }

    if (typeof commit.subject === `string`) {
      let url = context.repository ? `${context.host}/${context.owner}/${context.repository}` : context.repoUrl;

      if (url) {
        url = `${url}/issues/`;

        // Issue URLs.
        commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
          issues.push(issue);

          return `[#${issue}](${url}${issue})`;
        });
      }
      if (context.host) {
        // User URLs.
        commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9]){0,38})/g, `[@$1](${context.host}/$1)`);
      }
    }

    // remove references that already appear in the subject
    commit.references = commit.references.filter((reference) => {
      if (issues.indexOf(reference.issue) === -1) {
        return true;
      }

      return false;
    });

    return commit;
  },
  mainTemplate: '\n{{> header}}\n\n{{#each commitGroups}}\n\n{{#if title}}\n### {{title}}\n{{/if}}\n\n{{#each commits}}\n{{> commit root=@root}}\n{{/each}}\n{{/each}}\n\n{{> footer}}\n\n---',
  headerPartial: '\n## {{version}}\n  {{~#if date}} ({{date}})\n  {{~/if~}}',
  commitPartial: '\n#### {{subject}}\n\n{{~!-- commit references --}}\n{{~#if references~}}\n  {{~#each references}}, [{{this.issue}}]({{this.raw}})\n  {{~/each~}}\n{{~/if}}\n\n{{~!-- commit link --}} {{#if @root.linkReferences~}}\n  ([{{hash}}](\n  {{~#if @root.repository}}\n    {{~#if @root.host}}\n      {{~@root.host}}/\n    {{~/if}}\n    {{~#if @root.owner}}\n      {{~@root.owner}}/\n    {{~/if}}\n    {{~@root.repository}}\n  {{~else}}\n    {{~@root.repoUrl}}\n  {{~/if}}/\n  {{~@root.commit}}/{{hash}}))\n{{~else}}\n  {{~hash}}\n{{~/if}}\n\n{{#if body}}\n\n{{body}}\n\n{{~/if}}',
  footerPartial: '\n{{#if noteGroups}}\n{{#each noteGroups}}\n\n### {{title}}\n\n{{#each notes}}\n#### {{text}}\n{{/each}}\n{{/each}}\n{{/if}}'
};
    /* eslint-enable */

    // Check all properties of changelogTemplate
    for (const key in changelogTemplate) {
      if (Object.prototype.hasOwnProperty.call(changelogTemplate, key)) {
        assert.that(changelogTemplate[key]).is.equalTo(expected[key]);
      }
    }
    // Cross-check all properties of expected object
    for (const key in expected) {
      if (Object.prototype.hasOwnProperty.call(expected, key)) {
        assert.that(expected[key]).is.equalTo(changelogTemplate[key]);
      }
    }
  });
});

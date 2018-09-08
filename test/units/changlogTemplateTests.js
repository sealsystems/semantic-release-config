'use strict';

const assert = require('assertthat');

const changelogTemplate = require('../../changelog-template');

suite('changelogTemplate', () => {
  test('is an object', async () => {
    assert.that(changelogTemplate).is.ofType('object');
  });

  test('contains the expected contents.', async () => {
    assert.that(changelogTemplate).is.equalTo({
      mainTemplate: '\n{{> header}}\n\n{{#each commitGroups}}\n\n{{#if title}}\n### {{title}}\n{{/if}}\n\n{{#each commits}}\n{{> commit root=@root}}\n{{/each}}\n{{/each}}\n\n{{> footer}}\n\n---',
      headerPartial: '\n## {{version}}\n  {{~#if date}} ({{date}})\n  {{~/if~}}',
      commitPartial: '\n#### {{subject}}\n\n{{~!-- commit references --}}\n{{~#if references~}}\n  {{~#each references}}, {{this.raw}}\n  {{~/each~}}\n{{~/if}}\n\n{{~!-- commit link --}} {{#if @root.linkReferences~}}\n  ([{{hash}}](\n  {{~#if @root.repository}}\n    {{~#if @root.host}}\n      {{~@root.host}}/\n    {{~/if}}\n    {{~#if @root.owner}}\n      {{~@root.owner}}/\n    {{~/if}}\n    {{~@root.repository}}\n  {{~else}}\n    {{~@root.repoUrl}}\n  {{~/if}}/\n  {{~@root.commit}}/{{hash}}))\n{{~else}}\n  {{~hash}}\n{{~/if}}\n\n{{#if body}}\n\n{{body}}\n\n{{~/if}}',
      footerPartial: '\n{{#if noteGroups}}\n{{#each noteGroups}}\n\n### {{title}}\n\n{{#each notes}}\n#### {{text}}\n{{/each}}\n{{/each}}\n{{/if}}'
    });
  });
});

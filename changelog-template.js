'use strict';

module.exports = {
  mainTemplate: `
{{> header}}

{{#each commitGroups}}

{{#if title}}
### {{title}}
{{/if}}

{{#each commits}}
{{> commit root=@root}}
{{/each}}
{{/each}}

{{> footer}}

---`,

  headerPartial: `
## {{version}}
  {{~#if date}} ({{date}})
  {{~/if~}}`,

  commitPartial: `
#### {{subject}}

{{~!-- commit references --}}
{{~#if references~}}
  {{~#each references}}, {{this.raw}}
  {{~/each~}}
{{~/if}}

{{~!-- commit link --}} {{#if @root.linkReferences~}}
  ([{{hash}}](
  {{~#if @root.repository}}
    {{~#if @root.host}}
      {{~@root.host}}/
    {{~/if}}
    {{~#if @root.owner}}
      {{~@root.owner}}/
    {{~/if}}
    {{~@root.repository}}
  {{~else}}
    {{~@root.repoUrl}}
  {{~/if}}/
  {{~@root.commit}}/{{hash}}))
{{~else}}
  {{~hash}}
{{~/if}}

{{#if body}}

{{body}}

{{~/if}}`,

  footerPartial: `
{{#if noteGroups}}
{{#each noteGroups}}

### {{title}}

{{#each notes}}
#### {{text}}
{{/each}}
{{/each}}
{{/if}}`
};

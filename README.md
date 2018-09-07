# semantic-release-config

Configuration for semantic releases at SEAL Systems

## Getting started

First, you have to install the module as a development dependency:

```shell
npm install --save-dev @sealsystems/semantic-release-config
```

Alternatively, you can instruct your CI server to install it before creating a release:

```shell
npm install --no-save --save-dev @sealsystems/semantic-release-config
```

Please note: If you want to install multiple modules with the `--no-save` option, you must list all in the same `npm install` command:

```shell
npm install --no-save --save-dev @sealsystems/semantic-release-config semantic-release
```

The following release configurations are available:

- Generic release
- Node.js module
- Node.js binary

### Generic release

This configuration is used to create a release on GitHub. It updates the CHANGELOG.md, created a release tag, and publishes the release on the release page.  

To create binary releases, insert the following lines into your package.json:

```
"release": {
  "extends": "@sealsystems/semantic-release-config/generic",
}
```

### Node.js module

This configuration is used for Node.js modules. It performs the same steps as a binary release. In addition it also uploads the new release to a NPM registry.

To release a Node.js module, insert the following lines into your package.json:

```
"release": {
  "extends": "@sealsystems/semantic-release-config/node-module"
}
```

### Node.js binary

This configuration is used for Node.js executables (e.g. services). It performs almost the same steps as a module release excapt for publishing it on NPM.

To release a Node.js binary, insert the following lines into your package.json:

```
"release": {
  "extends": "@sealsystems/semantic-release-config/node-binary"
}
```

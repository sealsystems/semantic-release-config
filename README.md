# semantic-release-config

Configuration for semantic releases at SEAL Systems

## Getting started

First, you have to install the module as a development dependency:

```shell
npm install --save-dev @sealsystems/semantic-release-config
```

There are two variants of the release configuration:

- Binary releases
- Publish on NPM

### Binary releases

This configuration is used to create a release on GitHub. It updates the CHANGELOG.md, created a release tag, and publishes the release on the release page.  

To create binary releases, insert the following lines into your package.json:

```
"release": {
  "extends": "@sealsystems/semantic-release-config/binary",
}
```

### Publish on NPM

This configuration is used for Node.js modules. It performs the same steps as a binary release. In addition it also uploads the new release to a NPM registry.

To release a Node.js module, insert the following lines into your package.json:

```
"release": {
  "extends": "@sealsystems/semantic-release-config/npm"
}
```

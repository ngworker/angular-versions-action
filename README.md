# GitHub Action - Match Angular Versions

> DISCLAIMER: THIS ACTION IS HIGHLY EXPERIMENTAL.

This GitHub Action (written in JavaScript) modifies the root `package.json` of a project and replaces the version of all **Angular** related dependencies for given base version.

[![ngworker](https://img.shields.io/badge/ngworker-%40-red)](https://github.com/ngworker/)

## Usage

### Pre-requisites

Create a workflow `.yml` file in your repositories `.github/workflows` directory. An [example workflow](#example-workflow---match-Angular-versions) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

- `angular_version`: The base Angular version used to match the dependency version. Ex: 8.0.x, 10.0.x. To check the full list of supported versions, see [supported versions](###Supported-Angular-versions).

### Example workflow - match Angular versions

```yaml
name: Node.js CI

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x]
        angular-version: [8.0.x, 8.1.x, 8.2.x, 8.3.x, 9.0.x, 9.1.x, 10.0.x, 10.1.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Change to the right Angular version
        uses: ngworker/angular-versions-action@v1
        with:
          angular-version: ${{ matrix.angular-version }}

      - run: yarn
      - run: yarn lint
      - run: yarn build
      - run: yarn test
```

This example use the github matrix to build, lint and test your code against different versions of `Angular`. This should be specially useful for library authors.

### Supported Angular versions

At the moment this actions supports a limited set of Angular versions listed below.

- 8.0.x
- 8.1.x
- 8.2.x
- 8.3.x
- 9.0.x
- 9.1.x
- 10.0.x

## Contributing

We would love you to contribute to `@ngworker/angular-versions-action`, pull requests are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

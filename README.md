# GitHub Action - Match Angular Versions

This GitHub Action (written in JavaScript) modifies the root `package.json` of a project and replaces the version of all **Angular** related dependencies for given base version.

When necessary it updates the angular.json to use the correct builder.

[![ngworker](https://img.shields.io/badge/ngworker-%40-red)](https://github.com/ngworker/)

## Usage

### Pre-requisites

Create a workflow `.yml` file in your repositories `.github/workflows` directory. An [example workflow](#example-workflow---match-Angular-versions) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

- `angular-version`: The base Angular version used to match the dependency version. Ex: 8.0.x, 10.0.x. To check the full list of supported versions, see [supported versions](###Supported-Angular-versions).
- `root-path`: The path to the root folder of the project where the `package.json` and `angular.json` files are located. Defaults to `./`.

### Example workflow - match Angular versions

```yaml
name: CI workflow

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        angular-version:
          - 6.0.x,
          - 6.1.x,
          - 7.0.x,
          - 7.1.x,
          - 7.2.x,
          - 8.0.x,
          - 8.1.x,
          - 8.2.x,
          - 9.0.x,
          - 9.1.x,
          - 10.0.x,
          - 10.1.x,
          - 10.2.x,
          - 11.0.x,
          - 11.1.x,
          - 11.2.x
          - 12.0.x

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v2
        with:
          node-version: 12.x
      - name: Use Angular ${{ matrix.angular-version }}
        uses: ngworker/angular-versions-action@v4
        with:
          angular-version: ${{ matrix.angular-version }}

      - run: yarn install
      - run: yarn lint
      - run: yarn build
      - run: yarn test
```

This example use the github matrix to build, lint and test your code against different versions of `Angular`. This should be specially useful for library authors.

### Supported Angular versions

At the moment this actions supports a limited set of Angular versions listed below.

- 6.0.x,
- 6.1.x,
- 7.0.x
- 7.1.x
- 7.2.x
- 8.0.x
- 8.1.x
- 8.2.x
- 9.0.x
- 9.1.x
- 10.0.x
- 10.1.x
- 10.2.x
- 11.0.x
- 11.1.x
- 11.2.x
- 12.0.x

### Managed packages

The following packages are managed by this action:

- `@angular/animations`
- `@angular/cdk`
- `@angular/cli`
- `@angular/common`
- `@angular/compiler`
- `@angular/compiler-cli`
- `@angular/core`
- `@angular-builders/jest`
- `@angular-devkit/build-angular`
- `@angular-devkit/build-ng-packagr`
- `@angular-devkit/schematics-cli`
- `@angular/elements`
- `@angular/forms`
- `@angular/google-maps`
- `@angular/material`
- `@angular/platform-browser`
- `@angular/platform-browser-dynamic`
- `@angular/router`
- `@angular/youtube-player`
- `@types/node`
- `codelyzer`
- `ng-packagr`
- `rxjs`
- `tsickle `
- `tslib`
- `tslint`
- `ts-node`
- `typescript`
- `zone.js`

## Contributing

We would love you to contribute to `@ngworker/angular-versions-action`, pull requests are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/NachoVazquez"><img src="https://avatars3.githubusercontent.com/u/9338604?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nacho Vazquez</b></sub></a><br /><a href="#question-NachoVazquez" title="Answering Questions">💬</a> <a href="https://github.com/ngworker/angular-versions-action/issues?q=author%3ANachoVazquez" title="Bug reports">🐛</a> <a href="#business-NachoVazquez" title="Business development">💼</a> <a href="https://github.com/ngworker/angular-versions-action/commits?author=NachoVazquez" title="Code">💻</a> <a href="https://github.com/ngworker/angular-versions-action/commits?author=NachoVazquez" title="Documentation">📖</a> <a href="#example-NachoVazquez" title="Examples">💡</a> <a href="#ideas-NachoVazquez" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-NachoVazquez" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-NachoVazquez" title="Maintenance">🚧</a> <a href="#projectManagement-NachoVazquez" title="Project Management">📆</a> <a href="https://github.com/ngworker/angular-versions-action/pulls?q=is%3Apr+reviewed-by%3ANachoVazquez" title="Reviewed Pull Requests">👀</a> <a href="#security-NachoVazquez" title="Security">🛡️</a> <a href="https://github.com/ngworker/angular-versions-action/commits?author=NachoVazquez" title="Tests">⚠️</a> <a href="#tool-NachoVazquez" title="Tools">🔧</a> <a href="#userTesting-NachoVazquez" title="User Testing">📓</a></td>
    <td align="center"><a href="https://dev.to/layzee"><img src="https://avatars.githubusercontent.com/u/6364586?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lars Gyrup Brink Nielsen</b></sub></a><br /><a href="https://github.com/ngworker/angular-versions-action/issues?q=author%3ALayZeeDK" title="Bug reports">🐛</a> <a href="https://github.com/ngworker/angular-versions-action/commits?author=LayZeeDK" title="Code">💻</a> <a href="https://github.com/ngworker/angular-versions-action/commits?author=LayZeeDK" title="Documentation">📖</a> <a href="#example-LayZeeDK" title="Examples">💡</a> <a href="#ideas-LayZeeDK" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-LayZeeDK" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-LayZeeDK" title="Maintenance">🚧</a> <a href="#mentoring-LayZeeDK" title="Mentoring">🧑‍🏫</a> <a href="#platform-LayZeeDK" title="Packaging/porting to new platform">📦</a> <a href="#plugin-LayZeeDK" title="Plugin/utility libraries">🔌</a> <a href="https://github.com/ngworker/angular-versions-action/pulls?q=is%3Apr+reviewed-by%3ALayZeeDK" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/ngworker/angular-versions-action/commits?author=LayZeeDK" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://timdeschryver.dev"><img src="https://avatars.githubusercontent.com/u/28659384?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tim Deschryver</b></sub></a><br /><a href="https://github.com/ngworker/angular-versions-action/commits?author=timdeschryver" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

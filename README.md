# GitHub Action - Match Angular Versions

> DISCLAIMER: THIS ACTION IS HIGHLY EXPERIMENTAL.

This GitHub Action (written in JavaScript) modifies the root `package.json` of a project and replaces the version of all **Angular** related dependencies for given base version.

[![ngworker](https://img.shields.io/badge/ngworker-%40-red)](https://github.com/ngworker/)

## Usage

### Pre-requisites

Create a workflow `.yml` file in your repositories `.github/workflows` directory. An [example workflow](#example-workflow---match-Angular-versions) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

- `angular-version`: The base Angular version used to match the dependency version. Ex: 8.0.x, 10.0.x. To check the full list of supported versions, see [supported versions](###Supported-Angular-versions).

### Example workflow - match Angular versions

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x]
        angular-version:
          [
            8.0.x,
            8.1.x,
            8.2.x,
            9.0.x,
            9.1.x,
            10.0.x,
            10.1.x,
            10.2.x,
            11.0.x,
            11.1.x,
            11.2.x
          ]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Use Angular ${{ matrix.angular-version }}
        uses: ngworker/angular-versions-action@v1
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
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

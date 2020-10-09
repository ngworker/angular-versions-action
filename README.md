# GitHub Action - Match Angular Versions

This GitHub Action (written in JavaScript) modifies the root `package.json` of a project and replaces the version of all **Angular** related dependencies for given base version.

[![ngworker](https://img.shields.io/badge/ngworker-%40-red)](https://github.com/ngworker/)

## Usage

### Pre-requisites

Create a workflow `.yml` file in your repositories `.github/workflows` directory. An [example workflow](#example-workflow---match-Angular-versions) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

- `angular_version`: The base Angular version used to match the dependency version. Ex: 8.0.0, 10.0.14. To check the full list of supported versions, see [supported versions](###Supported-Angular-versions).

### Example workflow - match Angular versions

```yaml
todo: 'Complete example later'
```

This will replace the version of several dependencies related to Angular in the package.json. It will use versions compatible with the given Angular version.

### Supported Angular versions

At the moment this actions supports a limited set of Angular versions listed below.

- 8.0.0
- 9.0.0
- 10.0.0

## Contributing

We would love you to contribute to `@ngworker/angular-versions-action`, pull requests are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

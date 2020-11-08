# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.3.4](https://github.com/ngworker/angular-versions-action/compare/v2.3.3...v2.3.4) (2020-11-08)

### [2.3.3](https://github.com/ngworker/angular-versions-action/compare/v2.3.2...v2.3.3) (2020-11-01)


### Bug Fixes

* 🐛 add the rest of package.json during dependencies merge ([21e6791](https://github.com/ngworker/angular-versions-action/commit/21e6791e3ac96a98529ca4f44af4fd437188d821))

### [2.3.2](https://github.com/ngworker/angular-versions-action/compare/v2.3.1...v2.3.2) (2020-11-01)


### Bug Fixes

* correct typos in debug logs ([#5](https://github.com/ngworker/angular-versions-action/issues/5)) ([578cd7f](https://github.com/ngworker/angular-versions-action/commit/578cd7f3fe6e7a8fcef621bddff4aa4fa3afad53))

### [2.3.1](https://github.com/ngworker/angular-versions-action/compare/v2.3.0...v2.3.1) (2020-10-30)


### Bug Fixes

* 🐛 use correct version for ng-packagr in v11 ([#4](https://github.com/ngworker/angular-versions-action/issues/4)) ([1b38e2c](https://github.com/ngworker/angular-versions-action/commit/1b38e2c3950aed61dce2155b39a5ae02a792e08f))

## [2.3.0](https://github.com/ngworker/angular-versions-action/compare/v2.2.0...v2.3.0) (2020-10-30)


### Features

* 🎸 add support for Angular v11.0.x (RC) ([#3](https://github.com/ngworker/angular-versions-action/issues/3)) ([5f22020](https://github.com/ngworker/angular-versions-action/commit/5f22020099e596dabf9ae18437c766fb47cc688b))

## [2.2.0](https://github.com/ngworker/angular-versions-action/compare/v2.1.0...v2.2.0) (2020-10-24)


### Features

* 🎸 add support for v8.2.x, v9.1.x, v10.2.x ([#2](https://github.com/ngworker/angular-versions-action/issues/2)) ([03ccbbd](https://github.com/ngworker/angular-versions-action/commit/03ccbbd7a4b66064323153e84fa812a1e76e7e38))

## [2.1.0](https://github.com/ngworker/angular-versions-action/compare/v2.0.0...v2.1.0) (2020-10-18)


### Features

* 🎸 add support for angular 10.1.x ([e09d5f5](https://github.com/ngworker/angular-versions-action/commit/e09d5f54a13f20bc1b9fb05a9d8f1940ce731fb0))

## [2.0.0](https://github.com/ngworker/angular-versions-action/compare/v1.2.0...v2.0.0) (2020-10-16)


### ⚠ BREAKING CHANGES

* 🧨 changes variable names EX. from angular_version: 8.0.0 to
angular_version: 8.0.x

### Features

* 🎸 use free path version syntax for api variable ([95c09aa](https://github.com/ngworker/angular-versions-action/commit/95c09aa587c9be8aacd0a217f7b19f1f50a2290e))

## [1.2.0](https://github.com/ngworker/angular-versions-action/compare/v1.1.4...v1.2.0) (2020-10-16)


### Features

* 🎸 add support for angular 8.1.0 ([1b801b4](https://github.com/ngworker/angular-versions-action/commit/1b801b41442ca476cdb441d6c98f89bbc21531cf))


### Bug Fixes

* 🐛 add dist that support 8.1.0 ([ac404aa](https://github.com/ngworker/angular-versions-action/commit/ac404aa531b34e2e8db8343ffd5b665c3fd001e7))

### [1.1.4](https://github.com/ngworker/angular-versions-action/compare/v1.1.3...v1.1.4) (2020-10-16)


### Bug Fixes

* 🐛 add missing builds ([719e007](https://github.com/ngworker/angular-versions-action/commit/719e0075f1dbd05825961733ec34aade3e36480f))

### [1.1.3](https://github.com/ngworker/angular-versions-action/compare/v1.1.2...v1.1.3) (2020-10-16)


### Bug Fixes

* 🐛 modify only existing version, not override entire object ([886197a](https://github.com/ngworker/angular-versions-action/commit/886197a9fd445d3302ec334f859547d402e92301))

### [1.1.2](https://github.com/ngworker/angular-versions-action/compare/v1.1.1...v1.1.2) (2020-10-16)


### Bug Fixes

* 🐛 use the right build ([e018daa](https://github.com/ngworker/angular-versions-action/commit/e018daae97c946c3d8e5082d78263ee95a7a8ffd))

### [1.1.1](https://github.com/ngworker/angular-versions-action/compare/v1.1.0...v1.1.1) (2020-10-16)

## [1.1.0](https://github.com/ngworker/angular-versions-action/compare/v1.0.0...v1.1.0) (2020-10-16)


### Features

* 🎸 add @angular-devkit/build-ng-packagr version ([d21747a](https://github.com/ngworker/angular-versions-action/commit/d21747a39c0bb5595e9d428ebbbf16b64dd7eae2))

## 1.0.0 (2020-10-12)


### Features

* 🎸 implement the angular-versions-actions with dummy data ([8d7aa94](https://github.com/ngworker/angular-versions-action/commit/8d7aa94b8b67853a4f57183422a70e62198a379e))


### Bug Fixes

* 🐛 avoid catch unhandled errors ([5f94f49](https://github.com/ngworker/angular-versions-action/commit/5f94f497b014bd45541ec23508dbfc0b9c11cada))
* 🐛 change build folder ([78fe1a5](https://github.com/ngworker/angular-versions-action/commit/78fe1a53e3f2442340aaa4bf4fa5a38f6e42a2e4))
* 🐛 re-package action ([59b768e](https://github.com/ngworker/angular-versions-action/commit/59b768e2078337c1d77a036eb02309faf98afe84))
* 🐛 use real data to replace ([be6eeb2](https://github.com/ngworker/angular-versions-action/commit/be6eeb250ac10c3f5becacb55c6703b393de6d03))

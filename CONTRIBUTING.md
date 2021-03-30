# Contributing to Angular Versions Action

🙏 We would ❤️ for you to contribute to `AngularVersionsAction` and help make it even better than it is today!

## Developing

Install the dependencies

```bash
yarn
```

Build the typescript and package it for distribution

```bash
yarn build
```

Run the tests :heavy_check_mark:

```bash
yarn test
```

Make sure you include the latest distribution built in your PR commits

```bash
yarn build && git add .
```

## Releasing a new version (for core contributors only)

Always release from main

```bash
git fetch origin && git switch -C main origin/main
```

Generate the changelog, commit and tag of the release.

```bash
yarn release
```

Push the generated commit into `origin/main`

```bash
git push origin main
```

Push the generated version tag into `origin/main`.

```bash
git push --follow-tags origin main
```

This Github action follows the [recommended release workflow](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md#recommendations)

### Releasing minor and patch versions

> NOTE: This operation may need multiple attempts. Always verify that the sha of the latest major version tag matches the latest commit in the main branch

Match the major version release tag with the newly create release tag.

```bash
git tag -fa v3 -m "update v3 tag to v3.x.y"
```

Push the updated major version to force the release into the Github Marketplace

```bash
git push origin v1 --force
```

### Releasing a major version

Go to create a new release in Github a follow the instructions [there](https://github.com/ngworker/angular-versions-action/releases/new).

Use the major version format for the release. For example if the current major version tag is `v3` the new release version must be `v4`.

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested** by one or more specs (unit-tests).
- All public API methods **must be documented**.

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the angular-versions-action changelog**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

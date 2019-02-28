---
id: contribution-guide
title: Contribution Guide
---

## Bugs

### Where to Find Known Issues

We are using [GitHub Issues](https://github.com/inf3cti0n95/sidekik/issues) for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

### Reporting New Issues

Report bug issues with the [bug issue template](https://github.com/inf3cti0n95/sidekik/issues/new?&labels=bug&template=bug_report.md&title=bug%3A+%3CIssue+Title%3E). The best way to get your bug fixed is to provide a reduced test case. Include a [JSFiddle](https://jsfiddle.net/) depicting the issue is a great starting point.

## Proposing a Change

If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend [filing an issue](https://github.com/inf3cti0n95/sidekik/issues/new). This lets us reach an agreement on your proposal before you put significant effort into it.

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend to file an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

## Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

**[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)**

To help you get your feet wet and get you familiar with our contribution process, we have a list of **[good first issues](https://github.com/inf3cti0n95/sidekik/issues?q=is:open+is:issue+label:"good+first+issue")** that contain bugs that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take it over but you should still leave a comment.

## Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. We'll do our best to provide updates and feedback throughout the process.

**Before submitting a pull request,** please make sure the following is done:

1. Fork [the repository](https://github.com/inf3cti0n95/sidekik) and create your branch from `master`.
2. Run `yarn` in the repository root.
3. If you've fixed a bug or added code that should be tested, add tests!
4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.
5. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn lint`).
6. Compile the [TypeScript](https://typescriptlang.org/) typechecks (`yarn compile`).

### Development Workflow

After cloning sidekik, run `yarn` to fetch its dependencies.
Then, you can run several commands:

- `yarn lint` checks the code style.
- `yarn test` runs the complete test suite.
- `yarn test --watch` runs an interactive test watcher.
- `yarn compile` compile the [TypeScript](https://flowtype.org/) files.

We recommend running `yarn test` (or its variation above) to make sure you don't introduce any regressions as you work on your change.

We insist that your pull request contains unit tests for any new functionality. This way we can ensure that we don't break your code in the future.

### Style Guide

We use an automatic code formatter called [Prettier](https://prettier.io/).
Run `yarn lint` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

## Versioning

Sidekik follows [semantic versioning](https://semver.org/). We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.

## License

By contributing to Sidekik, you agree that your contributions will be licensed under its MIT license.

## What Next?

Read the [next section](codebase-overview.md) to learn how the codebase is organized.

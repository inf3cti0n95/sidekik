---
id: codebase-overview
title: Codebase Overview
---

## Monorepo Architecture

At sidekik, we use the Mono Repository Architecture to manage all the packages under on repository. So that managing different packages becomes less tedious. We use [Lerna](https://lernajs.io/) to handle the core packages within the monorepo.

## Directory Structure

All the packages in the project are maintained under the `packages` directory. Below is the example of a `@sidekik/tree` package.

```sh
packages
└── tree # package directory
    ├── lib # contains the compile javascript code.
    │   ├── index.d.ts
    │   ├── index.js # entrypoint of the compiled library.
    |   ...
    ├── package.json # contains package information related to '@sidekik/tree' package.
    ├── README.md # contains basic documentation related to the package.
    ├── src # contains the main source files.
    │   ├── index.ts # entrypoint of the source library.
    │   ├── Node.ts
    │   └── Tree.ts
    ├── __tests__ # contains unit tests related to the package
    │   ├── Node.spec.ts
    │   └── Tree.spec.ts
    └── tsconfig.json # contains TypeScript configurations related to the package.
```

## Development Workflow

After cloning sidekik, run `yarn` to fetch its dependencies.
Then, you can run several commands:

- `yarn lint` checks the code style.
- `yarn test` runs the complete test suite.
- `yarn test --watch` runs an interactive test watcher.
- `yarn compile` compile the [TypeScript](https://flowtype.org/) files.

We recommend running `yarn test` (or its variation above) to make sure you don't introduce any regressions as you work on your change.

We insist that your pull request contains unit tests for any new functionality. This way we can ensure that we don't break your code in the future.

## Style Guide

We use an automatic code formatter called [Prettier](https://prettier.io/).
Run `yarn lint` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

## Versioning

Sidekik follows [semantic versioning](https://semver.org/). We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.

## What Next?

Read the [next section](design-principles.md) to the design principles behind sidekik.

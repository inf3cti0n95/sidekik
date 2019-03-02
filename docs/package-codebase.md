---
id: package-codebase
title: Package Codebase
---

Assuming you have thorough idea of how things work in the project. Let's see how an individual package is created and maintained.

## Generating a new Package

We use [Lerna](https://github.com/lerna/lerna) to manage the packages in this [monorepo](codebase-overview.md#monorepo-architecture).

To create a new package, we use the [learn create](https://github.com/lerna/lerna/tree/master/commands/create#readme) command.

```
lerna create <package name>
```

For a package named @sidekik/tree, you would write `lerna create tree`. Which would first ask for basic information to populate the `package.json` file.

## Directory Structure

A package created with lerna generates boilerplate code. All the packages in the project are maintained under the `packages` directory. Below is the example of a `@sidekik/tree` package.

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

- **Note** - `lerna create` does not fill in all the configurations needed. We need to add some configurations and scripts to the newly created package for it to work seamlessly.

### tsconfig.json

The package must hava a Typescript Configuration file `tsconfig.json`. Which helps us to compile the source code into javascript modules.

A generic tsconfig.json under a package extends configurations from base [tsconfig.json](https://github.com/inf3cti0n95/sidekik/blob/master/tsconfig.json) in the root. And can override the configurations as per the need of the package.

```js
{
  "extends": "../../tsconfig.json", // base configuration
  "compilerOptions": {
    "outDir": "./lib"
  },
  "include": ["./src"]
}

```

### jest.config.js

The package might have a Jest Configuration file `jest.config.js`. Which helps us to in writing tests for the package.

A generic jest.config.js under a package imports configurations from base [jest.config.js](https://github.com/inf3cti0n95/sidekik/blob/master/jest.config.js) in the root. And can override the configurations as per the need of the package.

```js
var baseConfig = require("../../jest.config.js"); // base configuration.

module.exports = {
  ...baseConfig
  // Override any configuration
};
```

### package.json

By default lerna would ask for information to generate a `package.json`.

Additionally we need to some information to the package. As given below.

```js
{
  "name": "@sidekik/<package name>", // org Scoped package.
  "main": "lib/index.js", // entry point to the package.
  "typings": "lib/index.d.ts", // typings for the package.
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1",
    "tsc": "tsc" // adding tsc script in the package.
  }
}
```

Above listed are the most important things to setup in the package. In order to package to behave correctly at various stages such as compilation, publishing etc.

### src directory

The `src` directory contains the the source files, the typescript files for the project.

### lib directory

The `lib` directory contains the the compiled files, the javascript files for the project. This directory is generated when we call the [`yarn compile`](codebase-overview.md#development-workflow) script.

## What Next?

Read the [next section](design-principles.md) regarding the design principles behind sidekik.

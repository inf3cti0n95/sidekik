---
id: utils-introduction
title: Utils
---

## Overview

The `utils` package contains all the utilities used by different packages in sidekik. But do not fall under their own logic.

## Installation

```
yarn add @sidekik/utils
```

## Exports

### Types

#### `Optional<T>`

A Helper Type which shows that type is T or undefined.

Usage

```js
import { Optional } from "@sidekik/utils";

let x: Optional<number>;

// This shows that `x` can either be a `number` or `undefined`

x = 5; // Will allow
x = undefined; // Will allow

x = "Hello"; // TypeScript Compiler will throw error.
```

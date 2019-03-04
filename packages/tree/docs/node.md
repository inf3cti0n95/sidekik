---
id: tree-node-abstract-class
title: Node Abstract Class
---

## Definition

> A node (tree node) is a data structure consisting of a value, together with a list of references to other nodes.

## Overview

The package provides an abstract class for `Node`. Which can be extended to build up a node of suitable needs. The `Node` class contains just the basic properties. Absolutely essential for them to be defined as Node. Most kinds of Tree Nodes can be constructed extending Node class.

## Usage

```js

import { Node } from "@sidekik/tree"

class BinaryNode extends Node<number> {
    // Node with only `number` type keys.
    ...
    ...
    ...
}

```

## API

### Generic Types

#### `TKey`

Type of the `key` property of the Node.

### Properties

#### `parent?: Node<TKey>`

Optional `parent` property for the node, which points to the parent node.

#### `key: TKey`

`key` property for the node, which stores the key value for the node.

#### `isRootNode: boolean`

Returns `true` when the node has no parent node. Check if the node is a root node or not.

### Functions

#### `constructor(key: TKey)`

Constructor function to assign value and key to the node.

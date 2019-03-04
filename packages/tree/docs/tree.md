---
id: tree-tree-abstract-class
title: Tree Abstract Class
---

## Definition

> A node (tree node) is a data structure consisting of a value, together with a list of references to other nodes.

## Overview

The package provides an abstract class for `Tree`. Which can be extended to build up a tree of suitable needs. The `Tree` class contains just the basic properties and abstract methods. Absolutely essential for them to be defined as Tree. Most kinds of Tree can be constructed extending this class.

## Usage

```js

import { Node, Tree } from "@sidekik/tree"

class BinaryNode extends Node<number> {
    // Node with only `number` type keys.
    ...
    ...
    ...
}

class BinarySearchTree<BinaryNode> {
    ...
    ...
    ...
}

```

## API

### Generic Types

#### `T extends Node<TKey>`

Type of the Nodes in the tree. Type T extends must extend the [`Node` class](node.md).

### Properties

#### `root?: T

Optional `root` property for the node, which is rootNode.

#### `comparer: (node1: T, node2: T) => boolean`

`comparer` function for the tree, which compares two nodes `node1` and `node2` and returns `true` or `false`.

#### `isEmpty: boolean`

Returns `true` when the node has no parent node. Check if the node is a root node or not.

### Functions

#### `constructor(comparer: (node1: T, node2: T) => boolean)`

Constructor function to assign comparer to the tree.

#### `abstract insert(node: T): T`

Constructor function to assign comparer to the tree. Accepts a node which is to be inserted in the tree. Should return the inserted node.

#### `abstract delete(key: GetTKey<T>): Optional<T>`

Implement `delete` function to delete nodes to the tree.Accepts `key` to the node to be deleted as parameter. Should return Node deleted and returns `undefined` if no node is found.

#### `abstract search(key: GetTKey<T>): Optional<T>`

Implement `search` function to search a node in the tree. Should return Node found and returns `undefined` if no node is found.

#### `abstract max(): Optional<T>`

Implement `max` function to search max node in the tree. Should return Node found and returns `undefined` if no node is found.

#### `abstract min(): Optional<T>`

Implement `min` function to search min node in the tree. Should return Node found and returns `undefined` if no node is found.

#### `abstract predecessor(key: GetTKey<T>): Optional<T>`

Implement `predecessor` function to search nodes in the tree. Accepts `key` to the node whose predecessor is to be searched for. Should return Node found and returns `undefined` if no node is found.

#### `abstract successor(key: GetTKey<T>): Optional<T>`

Implement `successor` function to search nodes in the tree. Accepts `key` to the node whose successor is to be searched for. Should return Node found and returns `undefined` if no node is found.

#### `abstract height(): number`

Implement `height` function to find the height/depth of the tree.

#### `abstract size(): number`

Implement `size` function to find the number of nodes in the tree.

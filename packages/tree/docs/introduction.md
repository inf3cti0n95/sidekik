---
id: tree-introduction
title: Tree
---

## Definition

> A tree is a widely used abstract data type — or data structure implementing this ADT that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.
> -- <cite>[Wikipedia](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)</cite>

A tree data structure can be defined recursively as a collection of nodes, starting from the root node, where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

A simple unordered tree in this diagram, the node labeled 7 has two children, labeled 2 and 6, and one parent, labeled 2. The root node, at the top, has no parent.

<p align="center">
  <img width="460" height="300" src="https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg">
</p>

## Installation

```
yarn add @sidekik/tree
```

## Implementation

There are two widely used implementation for a Tree ADT.

- First approach is implementing a Tree class which has a reference to the root node. And has methods related to tree operations like insert, search, delete, etc. With a Node class just keeping the references to its `children` and `parent` and a `key` which holds the value for the node.
- Second approach is thinking of a node itself as a subtree. Thus containing all the methods such as insert, delete, etc at the node level.

We have implemented the first approach. Where the `Tree` class holds all the operational methods such as insert, delete, search, max, min, etc. And the `Node` class which has a `key` which stores the key value for the node and reference to `parent` node. We have left the implementation of the `children` nodes on the implementor of the abstract class.

The package provides an abstract classes for `Node` and `Tree` from the Tree Data Structure.

More detailed discussion regarding both the [`Tree`](tree.md) and [`Node`](node.md) can be found in their individual documentations.

## References

- [Wikipedia](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)
- [NIST](https://xlinux.nist.gov/dads/HTML/tree.html)

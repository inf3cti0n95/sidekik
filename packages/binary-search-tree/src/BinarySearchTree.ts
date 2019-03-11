import { Tree } from "@sidekik/tree";
import { Optional } from "@sidekik/utils";
import { BinaryNode } from "./BinaryNode";

export class BinarySearchTree<TKey, TValue = unknown> extends Tree<
  BinaryNode<TKey, TValue>
> {
  insert(node: BinaryNode<TKey, TValue>): BinaryNode<TKey, TValue> {
    let parent;
    let currentNode = this.root;
    while (currentNode) {
      parent = currentNode;

      if (this.comparer(node, currentNode)) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    node.parent = parent;
    if (!parent) {
      this.root = node;
    } else if (this.comparer(node, parent)) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    return node;
  }

  delete(key: TKey): Optional<BinaryNode<TKey, TValue>> {
    throw new Error("Method not implemented.");
  }
  search(key: TKey): Optional<BinaryNode<TKey, TValue>> {
    throw new Error("Method not implemented.");
  }
  max(): Optional<BinaryNode<TKey, TValue>> {
    throw new Error("Method not implemented.");
  }
  min(): Optional<BinaryNode<TKey, TValue>> {
    throw new Error("Method not implemented.");
  }
  predecessor(key: TKey): Optional<BinaryNode<TKey, TValue>> {
    throw new Error("Method not implemented.");
  }
  successor(key: TKey): Optional<BinaryNode<TKey, TValue>> {
    throw new Error("Method not implemented.");
  }
  height(): number {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
}

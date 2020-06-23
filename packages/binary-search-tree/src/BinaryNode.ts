import { Node } from "@sidekik/tree";

export class BinaryNode<TKey, TMeta = unknown> extends Node<TKey> {
  value?: TMeta;
  left?: BinaryNode<TKey, TMeta>;
  right?: BinaryNode<TKey, TMeta>;
  parent?: BinaryNode<TKey, TMeta>;

  constructor(key: TKey, value?: TMeta) {
    super(key);
    this.value = value;
  }
}

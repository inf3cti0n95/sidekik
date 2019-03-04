/**
 * Node Abstract Class which is the basic element for a tree.
 * Most kinds of Tree Nodes can be constructed extending Node class.
 *
 * It stores a pointer to the `parent` node and A `key` value.
 * And a boolean `isRootNode` which returns `true` if the node is a root node.
 *
 * @property  {Node<TKey>} parent?
 * @property  {TKey} key
 * @property  {boolean} isRootNode
 */
export abstract class Node<TKey> {
  /**
   * Optional `parent` property for the node, which points to the parent node.
   * @property  {Node<TKey>} parent?
   */
  public parent?: Node<TKey>;

  /**
   * `key` property for the node, which stores the key value for the node.
   * @property  {TKey} key
   */
  public key: TKey;

  /**
   * Constructor function to assign value and key to the node.
   * @constructor
   * @param  {TKey} key
   */
  constructor(key: TKey) {
    this.key = key;
  }

  /**
   * Returns `true` when the node has no parent node.
   * Check if the node is a root node or not.
   * @returns boolean
   */
  public get isRootNode(): boolean {
    return !this.parent;
  }
}

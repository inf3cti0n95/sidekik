import { Optional } from "@sidekik/utils";
import { Node } from "./";

//Inferring Type of the Key in the Node class.
type GetTKey<T> = T extends Node<infer TKey> ? TKey : never;

/**
 * Implement @abstract Tree<T extends Node<T>> class
 * to construct a Basic Tree data structure.
 */
export abstract class Tree<T extends Node<unknown>> {
  /**
   * `comparer` function for the tree, which compares two nodes
   * `node1` and `node2` and returns `true` or `false`.
   *
   * @param  {T} node1
   * @param  {T} node2
   *
   */
  public comparer: (node1: T, node2: T) => boolean;

  /**
   * Optional `root` property for the node, which is rootNode.
   * @property  {Node<TKey>} parent?
   */
  public root?: T;

  /**
   * Constructor function to assign comparer to the tree.
   * @constructor
   * @param  {(node1:T,node2:T)=>boolean} comparer
   */
  constructor(comparer: (node1: T, node2: T) => boolean) {
    this.comparer = comparer;
  }
  /**
   * Returns `true` when the tree has no `root` node.
   * Check if the tree is empty tree or not.
   * @returns boolean
   */
  public get isEmpty(): boolean {
    return !this.root;
  }
  /**
   * Implement `insert` function to insert nodes to the tree.
   *
   * @abstract
   * @param  {T} node Accepts a node which is to be inserted in the tree
   * @returns T should returns the Node inserted.
   */
  abstract insert(node: T): T;

  /**
   * Implement `delete` function to delete nodes to the tree.
   *
   * @abstract
   * @param  {GetTKey<T>} key Key to the node to be deleted.
   * @returns Optional<T> should returns Node deleted.
   * returns `undefined` if no node is deleted.
   */
  abstract delete(key: GetTKey<T>): Optional<T>;

  /**
   * Implement `search` function to search nodes in the tree.
   *
   * @abstract
   * @param  {GetTKey<T>} key Key to the node to be searched.
   * @returns Optional<T> should returns Node found.
   * returns `undefined` if no node is found.
   */
  abstract search(key: GetTKey<T>): Optional<T>;

  /**
   * Implement `max` function to search max node in the tree.
   *
   * @abstract
   * @returns Optional<T> should returns Node if max node is found.
   * returns `undefined` if no node is found. i.e. Tree is empty.
   */
  abstract max(): Optional<T>;

  /**
   * Implement `min` function to search min node in the tree.
   *
   * @abstract
   * @returns Optional<T> should returns Node if min node is found.
   * returns `undefined` if no node is found. i.e. Tree is empty.
   */
  abstract min(): Optional<T>;

  /**
   * Implement `predecessor` function to search nodes in the tree.
   *
   * @abstract
   * @param  {GetTKey<T>} key Key to the node whose predecessor is to be searched for.
   * @returns Optional<T> should returns Node if predecessor node is found.
   * returns `undefined` if no node is found.
   */
  abstract predecessor(key: GetTKey<T>): Optional<T>;

  /**
   * Implement `successor` function to search nodes in the tree.
   *
   * @abstract
   * @param  {GetTKey<T>} key Key to the node whose successor is to be searched for.
   * @returns Optional<T> should returns Node if successor node is found.
   * returns `undefined` if no node is found.
   */
  abstract successor(key: GetTKey<T>): Optional<T>;

  /**
   * Implement `height` function to find the height/depth of the tree.
   *
   * @abstract
   * @returns number The height of the tree.
   */
  abstract height(): number;

  /**
   * Implement `size` function to find the number of nodes in the tree.
   *
   * @abstract
   * @returns number number of nodes in the tree.
   */
  abstract size(): number;
}

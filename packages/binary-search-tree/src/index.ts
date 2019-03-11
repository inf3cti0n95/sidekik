import { BinaryNode } from "./BinaryNode";
import { BinarySearchTree } from "./BinarySearchTree";

let x = new BinaryNode<number>(6);
let y = new BinarySearchTree<number>((a, b) => a.key < b.key);

y.insert(new BinaryNode(1));
y.insert(new BinaryNode(2));
y.insert(new BinaryNode(4));
y.insert(new BinaryNode(-1));
y.insert(x);

console.log(y);

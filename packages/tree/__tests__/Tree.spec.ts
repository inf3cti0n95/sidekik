import { Node, Tree, Optional } from "../src";

class TestNode extends Node<number> {}

class TestTree extends Tree<TestNode> {
  insert(node: TestNode): TestNode {
    throw new Error("Method not implemented.");
  }
  delete(key: number): Optional<TestNode> {
    throw new Error("Method not implemented.");
  }
  search(key: number): Optional<TestNode> {
    throw new Error("Method not implemented.");
  }
  max(): Optional<TestNode> {
    throw new Error("Method not implemented.");
  }
  min(): Optional<TestNode> {
    throw new Error("Method not implemented.");
  }
  predecessor(key: number): TestNode {
    throw new Error("Method not implemented.");
  }
  successor(key: number): Optional<TestNode> {
    throw new Error("Method not implemented.");
  }
  height(): number {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
}
const comparer = (a: TestNode, b: TestNode) => a.key > b.key;

describe("Tree tests", () => {
  describe("constructor", () => {
    it("should have a call with comparer", () => {
      const tree = new TestTree(comparer);
      expect(tree.comparer).toBe(comparer);
    });

    it("should not assign a parent.", () => {
      const node = new TestTree(comparer);
      expect(node.root).toBeUndefined();
    });

    it("should return true on isEmpty.", () => {
      const tree = new TestTree(comparer);
      expect(tree.isEmpty).toEqual(true);
    });
  });
});

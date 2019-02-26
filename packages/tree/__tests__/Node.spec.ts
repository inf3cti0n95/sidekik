import { Node } from "../src";

class TestNode extends Node<number> {}

describe("Node tests", () => {
  describe("constructor", () => {
    it("should have a call with key", () => {
      let key = 1;
      const node = new TestNode(key);
      expect(node.key).toEqual(key);
    });

    it("should not assign a parent.", () => {
      let key = 1;
      const node = new TestNode(key);
      expect(node.parent).toBeUndefined();
    });

    it("should return true on isRootNode.", () => {
      let key = 1;
      const node = new TestNode(key);
      expect(node.isRootNode).toEqual(true);
    });
  });
});

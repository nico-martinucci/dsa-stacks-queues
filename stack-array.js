/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  constructor() {
    this._array = [];
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    this._array.push(val);
    this.top = val;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0) throw new Error("The stack cannot be empty!");
    this.size--;
    this.top = this._array[this.size - 1];
    return this._array.pop();
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    if(this.top) return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;

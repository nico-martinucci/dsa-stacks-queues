const LinkedList = require("./linked-list")

/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  constructor() {
    this._ll = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._ll.push(val);
    this._updateProps();
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0) throw new Error("Can't be an empty queue!")
    const val = this._ll.shift();
    this._updateProps();

    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.first) return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }

  _updateProps() {
    this.first = this._ll.head;
    this.last = this._ll.tail;
    this.size = this._ll.length;
  }
}

module.exports = Queue;

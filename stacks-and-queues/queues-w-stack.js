class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
console.log(myQueue.peek());
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.peek();

//the meaning of this implementation is, if we want to dequeue, we will move all the elements from last to first (because dequeue is the case with the HEAD/ first elemnt)
//and if we want to enqueue, we will move all the elements from first to last (because enqueue is the case with the TAIL/ last elementsd)

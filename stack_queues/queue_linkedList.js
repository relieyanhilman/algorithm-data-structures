class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.first = newNode;
            this.last = this.first;
            this.length++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length == 0) {
            return null;
        }
        const holdingPointer = this.first.next;
        this.first = holdingPointer;
        this.length--;
        return this;
    }

}

const myQueue = new Queue();
console.log(myQueue.enqueue(10));
console.log(myQueue.enqueue(13));
console.log(myQueue.enqueue(15));
console.log(myQueue.enqueue(17));
console.log(myQueue.enqueue(19));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
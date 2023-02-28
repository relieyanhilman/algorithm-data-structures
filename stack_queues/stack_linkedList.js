//Stacks

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.top = newNode;
            this.bottom = this.top;
        } else {
            const holdingPointer = this.top;
            newNode.next = holdingPointer;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length == 0) {
            return null;
        }
        if (this.top == this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top.next;
        this.top = holdingPointer;
        this.length--;

        return this;

    }
}

const myStack = new Stack();
console.log(myStack.push(6));
console.log(myStack.push(8));
console.log(myStack.push(9));
console.log(myStack.pop());
console.log('peek', myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
// console.log('peek', myStack.peek());
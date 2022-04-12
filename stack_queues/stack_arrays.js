class Stack {
    constructor() {
        this.array = [];
        this.length = 0;
    }

    peek() {
        if (this.length == 0) {
            return null
        }
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        this.length++;
        return this;
    }

    pop() {
        if (this.length == 0) {
            return null;
        }
        this.array.pop();
        this.length--;
        return this;
    }
}

const myArray = new Stack();
console.log(myArray.push(10));
console.log(myArray.push(50));
console.log(myArray.push(75));
console.log(myArray.pop());
console.log(myArray.peek());
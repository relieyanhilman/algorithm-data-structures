class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    let arrayContainer = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arrayContainer.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arrayContainer;
  }

  traverseToIndex(index) {
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    return prev;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw Error("index di luar length");
    }

    if (index == 0) {
      this.prepend(value);
      return this;
    }

    if (index == this.length) {
      this.append(value);
      return this;
    }
    let newNode = new Node(value);
    let prev = this.traverseToIndex(index);
    let after = prev.next;
    newNode.next = after;
    newNode.prev = prev;
    prev.next = newNode;
    after.prev = newNode;
    this.length++;
    return this;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    let after;
    if (index == 0) {
      after = this.head.next;
      this.head = after;
      this.head.prev = null;
      this.length--;
      return this;
    }

    let prev = this.traverseToIndex(index);
    after = prev.next.next;
    prev.next = after;
    after.prev = prev;
    if (index == this.length - 1) {
      this.tail = prev;
    }
    this.length--;
    return this;
  }

  reverse() {
    let temp2 = this.tail;
    this.tail = this.head;
    this.head = temp2;

    let currentNode = this.head;
    while (currentNode !== null) {
      let tempPrev = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = tempPrev;
      currentNode = currentNode.next;
    }
    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

let linkedListUhuy = new DoublyLinkedList(6000);
linkedListUhuy.insert(1, 7000);
linkedListUhuy.insert(2, 8000);
linkedListUhuy.insert(1, 10);
linkedListUhuy.insert(2, 67);
linkedListUhuy.insert(3, 96);

console.log("BEFORE", linkedListUhuy.printList());
linkedListUhuy.remove(2);

console.log("AFTER", linkedListUhuy.printList());

linkedListUhuy.reverse();

console.log("AFTER REVERSE", linkedListUhuy.printList());
console.log(linkedListUhuy);

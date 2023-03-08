class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  insert(index, value) {
    let newNode = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    let after = prev.next;
    newNode.next = after;
    prev.next = newNode;

    if (prev == this.tail) {
      this.tail = newNode;
    }

    this.length++;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let linkedListUhuy = new LinkedList(6000);
linkedListUhuy.insert(1, 7000);
linkedListUhuy.insert(2, 8000);
linkedListUhuy.insert(1, 10);
linkedListUhuy.insert(2, 20);

console.log(linkedListUhuy);

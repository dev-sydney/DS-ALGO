class Nodde {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    this.head = new Nodde(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let current = this.head;
    let lastNode = new Nodde(data);

    if (!this.head) {
      this.append(data);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = lastNode;
    }
    this.size++;
  }
  insertAtIndex(data, index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.append(data);
      return;
    } else {
      let currentNode, previousNode;
      let count = 0;
      let newNode = new Nodde(data);
      currentNode = this.head;
      while (count < index) {
        previousNode = currentNode;
        count++;
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
  }
  //   Get at Index
  getAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    let current;
    let count = 0;
    current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log(current.data);
  }

  //Remove at indexx
  deleteNodeAtIndex(index) {
    let current, previous;
    current = this.head;
    let count = 0;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    current = current.next;
    previous.next = current;
    this.size--;
    this.showList();
  }
  //Clear the list

  showList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  //counts the number of occurences of an integer
  count(data) {
    let current = this.head;
    let counter = 0;
    while (current) {
      current.data === data && counter++;
      current = current.next;
    }
    console.log(counter);
  }
  length() {
    let current = this.head;
    let counter = 0;
    while (current) {
      current = current.next;
      counter++;
    }
    console.log(counter);
  }
  sortedInsert(data) {
    let current, previous;
    current = this.head;
    let isNotSorted = true;
    let newNode = new Nodde(data);
    while (isNotSorted) {
      previous = current;
      current = current.next;
      data > previous.data && data < current.data && (isNotSorted = false);
    }
    newNode.next = current;
    previous.next = newNode;
    return (this.head = previous);
  }
}

const ll = new LinkedList();
/* ll.append('Gideon');
ll.append('fred');
ll.append('Evan');
ll.append('david');
ll.append('catelyn');
ll.append('bob');
ll.append('Ama'); */

ll.append(5);
ll.append(3);
// ll.append(1);
// ll.insertAtIndex('cate', 1);
// ll.insertAtIndex(10, 2);
// ll.getAtIndex(6);
// ll.deleteNodeAtIndex(0);
// ll.count('Ama');
// ll.length();
console.log(ll.sortedInsert(4));
ll.showList();
// console.log(ll);

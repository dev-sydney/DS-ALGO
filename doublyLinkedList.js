class node {
  constructor(data, prev = null, next = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Adding a new node at the begging of the list
  prepend(data) {
    if (!this.head) {
      this.head = new node(data, this.head);
    } else {
      let newNode = new node(data); //Creating a fresh new node which will become the head of the list
      newNode.next = this.head; //Since it wll become the head of the list, its next property should be the node currently at the top
      this.head.prev = newNode; //Since the current head will no longer the head, it needs its .next prop to point to the potential new head(which is "newNode")
      this.head = newNode; //At this point the newNode is all set to be the head, so yeah...
    }
    this.size++;
  }
  //Adds a new node at the end of the list
  append(data) {
    this.head.next = new node(data, this.head);
    this.size++;
  }
  /**
   * Used to insert a new node at a specified index
   * @param {*} data the data of the newly inserted node
   * @param {*} index this is the index of the node to be inserted
   */
  insertNodeAtIndex(data, index = null) {
    //SIDE CASE 1: The index is greater than the size of the list
    if (index >= this.size && index < 0) return;
    //SIDE CASE 2: if the index is 0
    if (index === 0) {
      this.prepend(data);
      this.size++;
      return;
    } else {
      let newNode = new node(data);
      let currentNode, previousNode;
      currentNode = this.head;
      let count = 0;
      while (count < index) {
        previousNode = currentNode;
        count++;
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
      newNode.prev = previousNode;
      this.size++;
    }
  }
  /**
   * This reads the data of the node at the specified index
   * @param {*} i index of the node to be read
   */
  getNode(i) {
    let currentNode = this.head;
    let count = 0;
    if (i < 0 && i >= this.size) return;
    if (i === 0) return this.head.data;

    while (count < i) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode.data;
  }
  //prints out all the values of the list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myList = new DoublyLinkedList();

myList.prepend('sydney');
myList.append('liana');
myList.prepend('Sethlina');
myList.insertNodeAtIndex(300, 0);
myList.insertNodeAtIndex('mareen', 3);
myList.prepend('Prosper');
console.log('THE VALUE:', myList.getNode(4));
myList.print();

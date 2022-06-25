class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  //Adding an element to the top of the stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added! to ${this.count}`);
    this.count++;
    return this.count - 1;
  }
  //Removes the element at the top of the stack
  pop() {
    //return undefined if the stack is empty
    if (this.count === 0) return undefined;

    let deletedItem = this.items[this.count - 1];
    console.log(`${deletedItem} removed from the stack`);
    this.count--;
  }
  //Reads the top element
  peep() {
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  getSize() {
    return this.count;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
// console.log(stack.peep());
stack.push(300);

console.log(' ');
stack.pop();
stack.push(800);
console.log(stack.items);

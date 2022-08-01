// class Nodee {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class binarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   /**
//    * This methods inserts a new node at the appropriate position in the tree
//    * @param {*} curNode The root node of the binary search tree
//    * @param {*} newNode The new node that will be added to the binary search tree
//    */
//   insertNode(curNode,newNode){
//     if(newNode.data < curNode.data){//With this condition we want to place the node on the LHS of the tree

//       if(!curNode.left){//when theres no node on the left
//         curNode.left = newNode;
//       }else{
//         this.insertNode(curNode.left,newNode)//recursive call but this time instead of the root, its the roots left node
//       }
//     }else if(newNode.data > curNode.data){

//       if(!curNode.right){//When theres no node on the right
//         curNode.right = newNode
//       }else{
//         this.insertNode(curNode.right,newNode);
//       }
//     }
//   }
//   /**
//    * Adds a new node at either the root or at any appropriate position in the tree
//    * @param {*} data The data of the node
//    * @returns
//    */
//   addNode(data){
//     let newNode = new Nodee(data);

//     if(!this.root){//When theres no root
//       this.root = newNode; //Assign the newly created node to the root of the tree
//       return;
//     }else{
//       this.insertNode(this.root,newNode);
//     }
//   }
//   /**
//    *
//    */
//   getRootNode(){
//     return this.root;
//   };

//   //Travsersal
//   preOrder(currNode){
//     if(currNode){
//       console.log(currNode.data);
//       this.preOrder(currNode.left)
//       this.preOrder(currNode.right)
//     }
//   }
// }

class Nodee {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.right = null;
  }
}

class BST {
  constructor(root = null) {
    this.root = root;
    this.size = 0;
  }
  insertNode(currNode, newNode) {
    if (newNode.data < currNode.data) {
      if (!currNode.left) {
        currNode.left = newNode;
      } else {
        this.insertNode(currNode.left, newNode);
      }
    } else if (newNode.data > currNode.data) {
      if (!currNode.right) {
        currNode.right = newNode;
      } else {
        this.insertNode(currNode.right, newNode);
      }
    }
  }

  add(data) {
    let newNode = new Nodee(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.size++;
  }
  /**
   * Traverses the binary tree to find the node with the least value
   * @param {*} currNode The current node, defaults to the tree's root node
   * @returns the node's value which is the least value
   */
  min(currNode = this.root) {
    if (!currNode.left) {
      return currNode.data;
    } else {
      return this.min(currNode.left);
    }
  }

  /**
   * Traverses the binary tree to find the node with the greatest value
   * @param {Object} currNode The current node, defaults to the tree's root node
   * @returns the node's value which is the greatest value
   */
  max(currNode = this.root) {
    if (!currNode.right) {
      return currNode.data;
    } else {
      return this.max(currNode.right);
    }
  }
  /**
   *
   * @param {*} data
   * @param {*} currNode
   * @returns {Boolean} true if the value specified as the parameter is in the tree
   */
  includes(data, currNode = this.root) {
    //CASE 1: data found
    if (data === currNode.data) return true;

    //CASE 2:
    if (data < currNode.data && currNode.left) {
      return this.includes(data, currNode.left);
    }

    //CASE 3:
    if (data > currNode.data && currNode.right) {
      return this.includes(data, currNode.right);
    }

    return false;
  }
  //N, L, R
  preOrderTraversal() {
    let results = [];

    const traverse = node => {
      results.push(node.data);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return results;
  }
  //L, N, R
  inOrderTraversal() {
    let results = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      results.push(node.data);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }
  //L, R, N
  postOrderTraversal() {
    let results = [];
    const traverse = node => {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      results.push(node.data);
    };

    traverse(this.root);

    return results;
  }
}

const sydneyTree = new BST();
sydneyTree.add(10);
sydneyTree.add(7);
sydneyTree.add(11);
sydneyTree.add(6);
sydneyTree.add(8);
sydneyTree.add(1);
sydneyTree.add(9);

sydneyTree.add(20);
sydneyTree.add(14);
sydneyTree.add(22);
console.log(sydneyTree.size);
console.log(sydneyTree.min());
console.log(sydneyTree.max());
// console.log(sydneyTree.inOrderTraversal());
// console.log(sydneyTree.preOrderTraversal());
console.log(sydneyTree.postOrderTraversal());
/* console.log(sydneyTree.includes(45));
console.log(sydneyTree.includes(30));
console.log(sydneyTree.includes(3));
console.log(sydneyTree.includes(10));
console.log(sydneyTree.includes(100));
console.log(sydneyTree.includes(1)); */

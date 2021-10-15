const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

 constructor() {
   this.tree = null
 }

  root() {
    return this.tree;
  }

  add(data) {
    let newNode = new Node(data)

    if (this.tree === null) {
      this.tree = newNode
    } else {
      this.insertNode(this.tree, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
     if (node.left === null) {
       node.left = newNode
     } else {
       this.insertNode(node.left, newNode)
     } 
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  has(data, node = this.tree) {
    if (this.find(data, this.tree)) {
      return true
    }
    return false  
  }

  find(data, node = this.tree) {
    if (node === null) { 
      return null
    }
    if (node.data > data) {
      return this.find(data, node.left)
    }
    if (node.data < data) {
      return this.find(data, node.right)
    }
    if (node.data === data) {
      return node
    }
    
  }

  remove(data, node = this.tree) {
    if (!node) {
      return node
    }
    if (node.data > data) {
      node.left = this.remove(data, node.left)
    }
    else if (node.data < data) {
      node.right = this.remove(data, node.right);
    }
    else {
      if (!node.left && !node.right) {
        return null
      }
      if (!node.left) {
        return node.right
      }
      if (!node.right) {
        return node.left
      }

      node.data = this.min(node.right);
      node.right = this.remove(node.data, node.right); 
    }
    return node;
  }

  min(node = this.tree) {
    if (node.left) {
      return this.min(node.left)
    } else {
      return node.data
    }
    
  }

  max(node = this.tree) {
    if (node.right) {
      return this.max(node.right)
    } else {
      return node.data
    }
  }
}
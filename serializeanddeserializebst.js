//Objective is to serialize and deserialize a BST

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 5)
tree.addLeftNode(tree.root.left, 3)
tree.addRightNode(tree.root.right, 6)
tree.addRightNode(tree.root.left, 4)


//O(n) solution for both the serialize and deserialize methods

class SerializeBST {
    constructor(root) {
        this.root = root
    }

    serialize(root) {
        let preorder = []
    
        function dfs(node) {
            if (node == null) {
                preorder.push(node)
                return
            }
        
            preorder.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }
        dfs(root)
        
        return preorder
    }

    deserialize(data) {
        let root = data.shift()
    
    if (root == null) {
        return null
    }
    
    let node = new Node(root)
    node.left = deserialize(data)
    node.right = deserialize(data)
    
    return node
    }
}
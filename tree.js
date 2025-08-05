import { createNode } from "./node.js";

export function createTree(array = []) {

    array = [...new Set(array)];
    let root = buildTree(array);

    function buildTree(array, start = 0, end = array.length - 1) {
        if (start > end) {
            return null;
        }
        let middle = Math.floor((start + end) / 2);
        let root = createNode(array[middle]);
        root.left = buildTree(array, start, middle - 1);
        root.right = buildTree(array, middle + 1, end);
        return root;
    }

    function insert(value, node = root) {
        if (node === null) {
          return createNode(value);
        }
        if (value < node.data) {
          node.left = insert(value, node.left);
        }
        if (value > node.data) {
          node.right = insert(value, node.right);
        }
        return node;
    }

    function deleteItem(value, node = root) {
        if (node.data === value) {
          if (node.left !== null) {
            return node.left;
          }
          else if (node.right !== null) {
            return node.right;
          }
          else {
            return null;
          }
        }
        if (value < node.data) {
          node.left = deleteItem(value, node.left);
        }
        if (value > node.data) {
          node.right = deleteItem(value, node.right);
        }
        return node;
    }

    function find(value, node = root) {
      if (node === null || node.data === value) {
        return node;
      }
      if (value < node.data) {
        return find(value, node.left);
      }
      if (value > node.data) {
        return find(value, node.right);
      }
    }

    function levelOrderForEach(callback = null, queue = [root]) {
      if (callback === null) {
        return;
      }
      if (queue.length === 0) {
        return;
      }
      let node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      callback(node);
      levelOrderForEach(callback, queue);
    }

    function inOrderForEach(callback = null, node = root) {
      if (callback === null) {
        return;
      }
      if (node === null) {
        return;
      }
      inOrderForEach(callback, node.left);
      callback(node);
      inOrderForEach(callback, node.right);
    }

    function preOrderForEach(callback = null, node = root) {
      if (callback === null) {
        return;
      }
      if (node === null) {
        return;
      }
      callback(node);
      preOrderForEach(callback, node.left);
      preOrderForEach(callback, node.right);
    }

    function postOrderForEach(callback = null, node = root) {
      if (callback === null) {
        return;
      }
      if (node === null) {
        return;
      }
      postOrderForEach(callback, node.left);
      postOrderForEach(callback, node.right);
      callback(node);
    }

    function height(value, node = find(value)) {
      if (node === null) {
        return -1;
      }
      let left = height(value, node.left);
      let right = height(value, node.right);

      return 1 + Math.max(left, right);
    }

    function depth(value, node = root) {
      if (node === null || node.data === value) {
        return 0;
      }
      if (value < node.data) {
        return 1 + depth(value, node.left);
      }
      if (value > node.data) {
        return 1 + depth(value, node.right);
      }
    }

    function isBalanced(node = root) {
      if (node === null) {
        return 0;
      }

      let leftHeight = isBalanced(node.left)
      if (leftHeight === -1){
        return -1;
      }

      let rightHeight = isBalanced(node.right)
      if (rightHeight === -1) {
        return -1;
      }

      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
      }

      return 1 + Math.max(leftHeight, rightHeight);
    }

    function rebalance() {
      let newArray = [];
      inOrderForEach((node) => {
        newArray.push(node.data);
      });
      root = buildTree(newArray);
    }

    const printTree = (node = root, prefix = '', isLeft = true) => {
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        printTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      }
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
      if (node.left !== null) {
        printTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      }
};

    return {
        insert,
        deleteItem,
        find,
        levelOrderForEach,
        inOrderForEach,
        preOrderForEach,
        postOrderForEach,
        height,
        depth,
        isBalanced,
        rebalance,
        printTree,
    }
}
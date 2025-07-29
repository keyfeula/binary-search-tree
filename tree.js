import { createNode } from "./node.js";

export function createTree(array) {

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
        printTree,
        insert,
        deleteItem,
    }
}
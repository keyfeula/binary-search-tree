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
          if (value < node.data && node.left === null) {
            node.left = createNode(value);
            return true;
          }
          else if (value > node.data && node.right === null) {
            node.right = createNode(value);
            return true;
          }
          else if (value < node.data && node.left !== null) {
            insert(value, node.left);
          }
          else {
            if (value === node.data) {
                return false;
            }
            insert(value, node.right);
          }
    }

    function printTree() {
        console.log(root);
    }

    return {
        printTree,
        insert,
    }
}
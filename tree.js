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

    return {
        root,
    }
}
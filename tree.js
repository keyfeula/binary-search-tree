import { createNode } from "./node.js";

export function createTree(array) {
    let root = null;
    array = [...new Set(array)];
    array.sort((a, b) => a - b);

    function buildTree(start, end) {
        if (start > end) {
            return null;
        }
        let middle = start + Math.floor((end - start) / 2);
        root = createNode(array[middle]);

        root.left = buildTree(start, middle - 1);
        //root.right = buildTree(middle + 1, end);
        return root;
    }

    root = buildTree(0, array.length);
    console.log(root);

}
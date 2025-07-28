import { createTree } from "./tree.js";

let tree = createTree([1, 2, 3, 5, 8, 10]);
tree.insert(0);
tree.printTree();
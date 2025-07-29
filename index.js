import { createTree } from "./tree.js";

let tree = createTree([2, 3]);
tree.insert(4);
tree.insert(0);
tree.insert(1);
tree.insert(7);
tree.insert(5);
console.log(tree.find(3));
tree.deleteItem(4);
tree.printTree();
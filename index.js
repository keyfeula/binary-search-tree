import { createTree } from "./tree.js";

let tree = createTree([60, 40, 20, 35, 90, 22, 17, 65, 92, 7, 19, 28]);
console.log(tree.isBalanced());
tree.printTree();
tree.insert(120);
tree.insert(140);
tree.insert(109);
tree.insert(183);
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
tree.printTree();

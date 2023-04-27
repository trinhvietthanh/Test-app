interface TreeNode {
  [key: number]: number[];
}

interface DFS {
  traverse(tree: TreeNode): number[];
}

class PreOrderDFS implements DFS {
  traverse(tree: TreeNode): number[] {
    const result: number[] = [];

    function visit(node: any): void {
      result.push(parseInt(node));
      for (const child of tree[node]) {
        visit(child);
      }
    }

    visit(Object.keys(tree)[0]);

    return result;
  }
}

class PostOrderDFS implements DFS {
  traverse(tree: TreeNode): number[] {
    const result: number[] = [];

    function visit(node: any): void {
      for (const child of tree[node]) {
        visit(child);
      }
      result.push(parseInt(node));
    }

    visit(Object.keys(tree)[0]);

    return result;
  }
}

class InOrderDFS implements DFS {
  traverse(tree: TreeNode): number[] {
    const result: number[] = [];

    function visit(node: any): void {
      if (tree[node].length > 0) {
        visit(tree[node][0]);
      }
      result.push(parseInt(node));
      if (tree[node].length > 1) {
        visit(tree[node][1]);
      }
    }

    visit(Object.keys(tree)[0]);

    return result;
  }
}

class DFSFactory {
  createTraversalMethod(method: string): DFS {
    switch (method.toLowerCase()) {
      case "preorder":
        return new PreOrderDFS();
      case "postorder":
        return new PostOrderDFS();
      case "inorder":
        return new InOrderDFS();
      default:
        throw new Error("Invalid traversal method.");
    }
  }
}

// Example usage:
const tree: TreeNode = {
  1: [2, 3],
  2: [4, 5],
  3: [],
  4: [],
  5: [6, 7],
  6: [],
  7: [8],
  8: [],
};

const factory = new DFSFactory();


const preOrderTraversal = factory.createTraversalMethod("preorder");
console.log("Pre order:", preOrderTraversal.traverse(tree)); 

const postOrderTraversal = factory.createTraversalMethod("postorder");
console.log("Post order:", postOrderTraversal.traverse(tree));

const inOrderTraversal = factory.createTraversalMethod("inorder");
console.log("In order:", inOrderTraversal.traverse(tree));

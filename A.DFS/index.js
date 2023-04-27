var PreOrderDFS = /** @class */ (function () {
    function PreOrderDFS() {
    }
    PreOrderDFS.prototype.traverse = function (tree) {
        var result = [];
        function visit(node) {
            result.push(parseInt(node));
            for (var _i = 0, _a = tree[node]; _i < _a.length; _i++) {
                var child = _a[_i];
                visit(child);
            }
        }
        visit(Object.keys(tree)[0]);
        return result;
    };
    return PreOrderDFS;
}());
var PostOrderDFS = /** @class */ (function () {
    function PostOrderDFS() {
    }
    PostOrderDFS.prototype.traverse = function (tree) {
        var result = [];
        function visit(node) {
            for (var _i = 0, _a = tree[node]; _i < _a.length; _i++) {
                var child = _a[_i];
                visit(child);
            }
            result.push(parseInt(node));
        }
        visit(Object.keys(tree)[0]);
        return result;
    };
    return PostOrderDFS;
}());
var InOrderDFS = /** @class */ (function () {
    function InOrderDFS() {
    }
    InOrderDFS.prototype.traverse = function (tree) {
        var result = [];
        function visit(node) {
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
    };
    return InOrderDFS;
}());
var DFSFactory = /** @class */ (function () {
    function DFSFactory() {
    }
    DFSFactory.prototype.createTraversalMethod = function (method) {
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
    };
    return DFSFactory;
}());
// Example usage:
var tree = {
    1: [2, 3],
    2: [4, 5],
    3: [],
    4: [],
    5: [6, 7],
    6: [],
    7: [8],
    8: []
};
var factory = new DFSFactory();
var preOrderTraversal = factory.createTraversalMethod("preorder");
console.log("Pre order:", preOrderTraversal.traverse(tree));
var postOrderTraversal = factory.createTraversalMethod("postorder");
console.log("Post order:", postOrderTraversal.traverse(tree));
var inOrderTraversal = factory.createTraversalMethod("inorder");
console.log("In order:", inOrderTraversal.traverse(tree));

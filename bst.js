class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let head = this.root;
        while(true){
            if(val == head.value) return undefined;
            if(val>head.value){
                if(!head.right){
                    head.right = newNode;
                    return this;
                }
                head = head.right;
            }else{
                if(!head.left){
                    head.left = newNode;
                    return this;
                }
                head = head.left;
            }
        }
    }
    search(val){
        if(!this.root) return undefined;
        let current = this.root;
        if(val == current.value) return true;
        while(true){
            if(val>current.value){
                if(!current.right) return false;
                if(val == current.right.value) return true;
                current = current.right;
            }else{
                if(!current.left) return false;
                if(current.left.value == val) return true;
                current = current.left;
            }
        }
    }
    bfs(){
        let node = this.root;
        let visited = [this.root.value];
        let queue = [this.root];
        while(queue.length){
            node = queue.shift();
            if(node.left){
                queue.push(node.left);
                visited.push(node.left.value)
            }
            if(node.right) {
                queue.push(node.right);
                visited.push(node.right.value);
            }
        }
        return visited;
    }
    dfs_preorder(){
        let visited = [];
        let node = this.root;
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            return;
        }
        traverse(node);
        return visited;
    }
    dfs_postorder(){
        let visited = [];
        let node = this.root;
        function traverse(node){
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(node);
        return visited;
    }
    dfs_inorder(){
        let visited = [];
        let node = this.root;
        function traverse(node){
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(node);
        return visited;
    }
}

let bst = new BinarySearchTree;
bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(8);
bst.insert(9);
bst.insert(3);
bst.insert(11);
bst.insert(13);
bst.insert(4);
//bst.search(29);

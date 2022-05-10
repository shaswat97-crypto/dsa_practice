class Node{
    constructor(val){
        this.val = val
        this.next = null;
        //this.prev= null;
    }
}

class Stack{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return null;
        let oldHead = this.head;
        if(this.head = this.tail){
            this.tail = null;
        } 
        this.head = oldHead.next;
        oldHead.next = null;
        this.length--;
        return oldHead.val;
    }
}

// let stack = new Stack;
// stack.push(1);
// stack.push(2);
// stack.pop();
// stack.pop();

class Q{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}

let q = new Q;
q.enqueue(1);
q.enqueue(2);
// pop();
// pop();
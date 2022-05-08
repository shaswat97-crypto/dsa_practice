class Node{
    constructor(val){
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.head === null) return undefined;
        let poppedNode = this.head;
        this.length--;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        return poppedNode;
    }
    unshift(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        let counter = 0;
        let node;
        if(index<0 || index>=this.length) return null;
        if (index <= Math.floor(this.length/2)){
            node = this.head;
            while(counter<index){
                node = node.next;
                counter++;
            }
        }else{
            counter = this.length-1;
            node = this.tail;
            while(counter>index){
                node = node.prev;
                counter--;
            }
        }
        return node;
    }
    set(index, val){
        if(!this.get(index)) return false;
        this.get(index).val = val;
        return true;
    }
    insert(index, val){
        if(index === 0) return !!this.unshift(val);
        else if(index === this.length) return !!this.push(val);
        else if(!this.get(index)) return false;
        else{
            let node = this.get(index);
            let newNode= new Node(val);
            newNode.next = node;
            node.prev.next=newNode;
            newNode.prev = node.prev;
            node.prev = newNode;
            this.length++;
            return this;
        }
    }
    print(){
        if(this.head === null) return undefined;
        let counter = 0; let arr = [];
        while(counter!=this.length){
            arr.push(this.get(counter).val);
            counter++;
        }
        console.log(arr);
    }
    remove(index){
        if(index<0 || index>=this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        let node = this.get(index);
        let before = node.prev; let next = node.next;
        before.next = next;
        next.prev = before;
        node.next = null; node.prev =null;
        this.length--;
        return node;
    }
    reverse(){
        if(this.length ===0) return undefined;
        
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prev = this.tail.next; let counter = 0;
        let next = null;
        let node = this.tail;
        while(counter!= this.length){
            node.next = next;
            node.prev = prev;
            next = node;
            node = prev;
            if(prev != null) prev = prev.next;
            counter++;
        }
        return this;
    }
}
let dll = new DoublyLinkedList;
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(5);
dll.push(6);
dll.push(7);
dll.push(8);
dll.push(9);
dll.push(10);
dll.push(11);
dll.push(12);
dll.push(13);
// dll.shift();
// dll.unshift(4);
// dll.set(0,1);
// dll.insert(8,10);
// dll.insert(0, 25);
// dll.insert(3, 55);
// dll.remove(2);
// dll.remove(2);
// dll.remove(2);
dll.reverse();
dll.print();
//1  2  3  4  5
//t->         ->h
// <-         <-
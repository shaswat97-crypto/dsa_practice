class Node{
    constructor(val, priority){
        this.value = val;
        this.priority = priority;
    }
}

class priorityQueue{
    constructor(){
        this.values = []; 
    }
    insert(val, priority){
        // typeof(heap.values);
        let node = new Node(val, priority);
        this.values.push(node);
        let idx = this.values.length-1;
        let idxParent;
        if(idx>0) idxParent = Math.floor((idx-1)/2);
        else idxParent = 0;
        let parent = this.values[idxParent];
        while(idx){
            this.swap(idx, idxParent, this.values);
            idx = idxParent;
            if(Math.floor((idx-1)/2)>0){
                idxParent = Math.floor((idx-1)/2);
            }else{
                idxParent = 0;
            }
        }
        return this.values;
    }
    swap(a, b, arr){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    remove(){
        let retMax = this.values[0];
        if(!this.values.length) return null;
        this.swap(0, this.values.length-1, this.values);
        let node = this.values.pop();
        this.bubbleDown();
        return retMax;
    }
    bubbleDown(){
        let idx = 0, minIdx;
        let head = this.values[0].priority;
        // let minChild = Math.min(this.values[2*idx+1].priority, this.values[2*idx+2].priority);
        if(this.values[2*idx+1].priority<this.values[2*idx+2].priority){
            minIdx = 2*idx+1;
        }else minIdx = 2*idx+2;
        while((minIdx+1)&&(minIdx+2)){
            this.swap(idx, minIdx, this.values);
            idx = minIdx;
            // maxChild = Math.max(this.values[2*idx+1], this.values[2*idx+2]);
            if(this.values[2*idx+1].priority<this.values[2*idx+2].priority){
                minIdx = 2*idx+1;
            }else minIdx = 2*idx+2;
        }
    }
}
let q = new priorityQueue();
q.insert(2,10);
q.insert(3,9);
q.insert(4,8);
q.insert(25,7);
q.insert(21,6);

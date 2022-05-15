class heap{
    constructor(){
        this.values = [];
    }
    insert(val){
        // typeof(heap.values);
        this.values.push(val);
        let parent = this.values[Math.abs(Math.floor((this.values.indexOf(val)-1)/2))];
        while(val> parent){
            this.swap(this.values.indexOf(val), this.values.indexOf(parent), this.values);
            if(Math.floor((this.values.indexOf(val)-1)/2)>0){
                parent = this.values[Math.abs(Math.floor((this.values.indexOf(val)-1)/2))];
            }else{
                parent = this.values[0];
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
        let idx = 0;
        let head = this.values[0];
        let maxChild = Math.max(this.values[2*idx+1], this.values[2*idx+2]);
        while(maxChild>head){
            this.swap(idx, this.values.indexOf(maxChild), this.values);
            idx = this.values.indexOf(head);
            maxChild = Math.max(this.values[2*idx+1], this.values[2*idx+2]);
        }
    }
}
let h = new heap;
h.insert(10);
h.insert(20);
h.insert(30);
h.insert(40);
h.insert(50);
h.insert(60);
h.insert(70);
h.insert(1);
h.remove();

//  60 40 50 10 30 20 1
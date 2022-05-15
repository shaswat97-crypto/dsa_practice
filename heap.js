class heap{
    constructor(){
        let values = [];
    }
    insert(val){
        values.push(val);
        let parent = values[Math.floor((indexof(val)-1)/2)];
        if(val> parent){
            swap(indexof(val), indexof(parent), values);
        }
        function swap(a, b, arr){
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
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
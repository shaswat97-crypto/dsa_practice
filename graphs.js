class graph{
    constructor(){
        this.adjanceyList = {};
    }
    addVertex(value){
        if(!(this.adjanceyList[value])) this.adjanceyList[value] = [];
    }
    addEdge(vert1, vert2){
        this.adjanceyList[vert1].push(vert2);
        this.adjanceyList[vert2].push(vert1);
    }
    removeEdge(vert1, vert2){
        let newArr = [],
            index = this.adjanceyList[vert1].indexOf(vert2);
        //console.log(this.adjanceyList[vert1].length);
        if(index == 0) this.adjanceyList[vert1].unshift();
        else if(index== this.adjanceyList[vert1].length-1) this.adjanceyList[vert1].pop();
        else{
            newArr = this.adjanceyList[vert1].slice(0, index);
            for(let i = index+1; i<this.adjanceyList[vert1]; i++){
                newArr.push(this.adjanceyList[vert1][i])
            }
            this.adjanceyList[vert1] = newArr;
        }
        //repeat same to remove from vert2
    }
}
let g = new graph;
g.addVertex("tokyo");
g.addVertex("china");
g.addVertex("singapore");
g.addVertex("maldives");
g.addEdge("tokyo", "singapore");
g.addEdge("tokyo", "maldives");
g.addEdge("tokyo", "china");
g.removeEdge("tokyo", "china");

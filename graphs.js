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
}
let g = new graph;
g.addVertex("tokyo");
g.addVertex("china");
g.addVertex("singapore");
g.addVertex("maldives");
g.addEdge("tokyo", "singapore");

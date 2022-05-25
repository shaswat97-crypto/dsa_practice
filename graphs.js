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
            newArr_2 = [],
            idx2 = this.adjanceyList[vert1].indexOf(vert2),
            idx1 = this.adjanceyList[vert2].indexOf(vert1);
        //removing from vertex1
        if(idx2 == 0) this.adjanceyList[vert1].shift();
        else if(idx2== this.adjanceyList[vert1].length-1) this.adjanceyList[vert1].pop();
        else{
            newArr = this.adjanceyList[vert1].slice(0, idx2);
            for(let i = idx2+1; i<this.adjanceyList[vert1].length; i++){
                newArr.push(this.adjanceyList[vert1][i])
            }
            this.adjanceyList[vert1] = newArr;
        }
        //removing from vertex2
        if(idx1 == 0) this.adjanceyList[vert2].shift();
        else if(idx2== this.adjanceyList[vert2].length-1 || this.adjanceyList[vert2].length) this.adjanceyList[vert2].pop();
        else{
            newArr_2 = this.adjanceyList[vert2].slice(0, idx1);
            for(let i = idx1+1; i<this.adjanceyList[vert2].length; i++){
                newArr_2.push(this.adjanceyList[vert2][i])
            }
            this.adjanceyList[vert2] = newArr_2;
        }
        return this.adjanceyList;
    }
    removeVertex(vertex){
        let count = this.adjanceyList[vertex].length,
        copyArr = [...this.adjanceyList[vertex]];
        for(let i = 0; i<count; i++){
            this.removeEdge(vertex, copyArr[i]);
        }
        delete this.adjanceyList[vertex];
    }
    //dfs traversal
    /*
    graph view
    {
        a: ['b', 'c'],
        b: [a, d, e],
        c: [a],
        d: [b],
        e: [b]
    }
    */
    dfs(start){
        let register = {},
            i = this.adjanceyList[start].length,
            visitorAddress = this.adjanceyList[start],
            visitedNode = this.adjanceyList[start][0];
        register[visitedNode] = true;
        function dfs_helper(){
            if(!register[start]){
                start = visitedNode;
            }else if(register[start]){
                i++;

            }

        }
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
g.addEdge("singapore", "maldives");
g.addEdge("maldives", "china");
//g.removeEdge("tokyo", "china");
g.removeVertex('tokyo')
//g.removeEdge('tokyo', 'singapore')
class Hash{
    constructor(size = 53){
        this.keymap = new Array(size)
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keymap.length;
        }
    return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(this.keymap[index]){
            this.keymap(index).push([key, value]);
        }else{
            this.keymap[index] = [];
            this.keymap[index].push([key, value]);
        }
        return index;
    }
    get(key){
        let index = this._hash(key);
        if(this.keymap[index]){
            for (let i = 0; i < this.keymap[index].length; i++) {
                if(this.keymap[index][i][0] == key){
                    return this.keymap[index][i][1];
                }
            }
        }
        return undefined;
    }
    keys(){
        let keys_data = [];
        for(let i = 0; i<this.keymap.length; i++){
           if(this.keymap[i]){
            for(let j = 0; j<this.keymap[i].length; j++ ){
                if(this.keymap[i][j]){
                    keys_data.push(this.keymap[i][j][0]);
                }
            }
           }
        }
        return keys_data;
    }
    values(){
        let keys_data = [];
        for(let i = 0; i<this.keymap.length; i++){
           if(this.keymap[i]){
            for(let j = 0; j<this.keymap[i].length; j++ ){
                if(this.keymap[i][j]){
                    keys_data.push(this.keymap[i][j][1]);
                }
            }
           }
        }
        return keys_data;
    }
    //avoiding repetetion
    /*
    values(){
        let keys_data = [];
        let flaf = 0;
        for(let i = 0; i<this.keymap.length; i++){
           if(this.keymap[i]){
            for(let j = 0; j<this.keymap[i].length; j++ ){
                if(this.keymap[i][j]){
                    for(let k = 0; k<keys_data.length; k++){
                        let check = keys_data[i];
                        if(check == this.keymap[i][j][1]){
                            flaf = 1;
                            break;
                        }
                    }
                    if(!flaf) keys_data.push(this.keymap[i][j][1]);
                    flaf = 0;
                }
            }
           }
        }
        return keys_data;
    }
    */
}
let h = new Hash;
h.set('hi','hello');
h.get('hi');

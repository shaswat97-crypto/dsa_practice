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
    set(key){
        let index = this._hash(key);
        if(this.keymap[index]){
            this.keymap(index).push(key);
        }else{
            this.keymap[index] = [];
            this.keymap[index].push(key);
        }
        return index;
    }
}
let h = new Hash;
h.set('hello');
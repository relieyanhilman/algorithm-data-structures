class HashTables {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    return this.data;
  }

  get(key) {
    let index = this._hash(key);
    const currentBucket = this.data[index];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    //looping ke semua keys
    // contoh [[['grapes', 100000], ['orange, 12000]], ['apple', 3000] ]
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            console.log(this.data[i][j][0]);
          }
        } else {
          console.log(this.data[i][0][0]);
        }
      }
    }
  }
}

const myHashTable = new HashTables(50);
myHashTable.set("grapes", 10000);
// console.log(myHashTable.get("grapes"));

myHashTable.set("beyblade", 6000);
myHashTable.set("MOUSE GILA", 10000);
myHashTable.set("MOUSE GILA2", 11000);
myHashTable.keys();

// let array1 = [
//   [
//     ["grapes", 100000],
//     ["orange", 12000],
//   ],
//   ["apple", 3000],
// ];

// console.log(array1[0].length);

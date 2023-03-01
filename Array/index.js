class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  getAllData() {
    return this.data;
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    let poppedValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return poppedValue;
  }

  update(index, value) {
    return (this.data[index] = value);
  }

  unshift(value) {
    //kalo ternyata array kosong, tinggal masukin tanpa ada pergeseran value
    if (this.length == 0) {
      this.data[this.length] = value;
      this.length++;
    } else {
      //temp untuk menyimpan data index ke-0
      let temp = this.data[0];

      //menggeser tiap index i ke kanan
      for (let item = 0; item < this.length; item++) {
        let temp2 = this.data[item + 1];
        this.data[item + 1] = temp;
        temp = temp2;
      }
      this.data[0] = value;
      this.length++;
    }
  }

  shift(index) {
    if (this.length == 0) {
      return this.data;
    } else {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  }
}

let kelasBaru = new MyArray();
kelasBaru.push(125);
kelasBaru.push(165);
kelasBaru.push(180);
console.log(kelasBaru.getAllData());
kelasBaru.pop();
console.log(kelasBaru.getAllData());
kelasBaru.push(7000);
console.log(kelasBaru.getAllData());
kelasBaru.unshift(12000);
console.log(kelasBaru.getAllData());
console.log(kelasBaru.get(4));
kelasBaru.update(0, 5000);
console.log(kelasBaru.getAllData());
kelasBaru.shift(2);
console.log(kelasBaru.getAllData());
kelasBaru.shift(1);
console.log(kelasBaru.getAllData());
kelasBaru.shift(1);
console.log(kelasBaru.getAllData());

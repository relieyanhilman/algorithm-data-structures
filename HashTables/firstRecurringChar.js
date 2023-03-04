//program untuk mengembalikan elemen yang keluar 2 kali dalam suatu array
//input adalah array, output adalah elemen yg keluar 2 kali, kalau tidak ada output undefined
//brute force approach ==> iterasi tiap elemen pada array, secara bersamaan, simpan elemnen dari tiap iterasi ke hashMap. Lalu pada iterasi berikutnya, jika elemen terseubt
//sudah ada di dalam HashMap, maka return elemen tersebut.

function firstRecurringChar(nums) {
  //define hashMap
  let hashMap = {};

  //iterasi tiap elemen dalam suatu array
  for (let i = 0; i < nums.length; i++) {
    //cek apakah elemen sudah ada di hashMap, jika sudah ada, return elemen tersebut
    if (hashMap[nums[i]]) {
      return nums[i];
    }
    //simpan elemen yang sudah dicek ke dalam hashMap
    hashMap[nums[i]] = true;
  }
  return undefined;
}

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringChar([2, 3, 4, 5]));

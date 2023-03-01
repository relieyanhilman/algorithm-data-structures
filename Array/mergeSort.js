// merge array [0,3,4,1] dengan array [4,6,30] menjadi [0,3,4,4,6,30,31]

//input nya adalah 2 array dan outputnya adalah sorted array
//brute force ==> masukin setiap elemen array2 ke dalam array1 (jika array2.length < array1.length), kemudian array1 disort

function mergeSort(array1, array2) {
  //cek jika input bukan array
  if (!(Array.isArray(array1) && Array.isArray(array2))) {
    throw Error("input bukan array");
  }

  if (array1.length == 0) {
    return array2;
  }
  if (array2.length == 0) {
    return array1;
  }

  //cek dan membandingkan length 2 array
  if (array2.length < array1.length) {
    //iterasi tiap elemen array yang panjangnya lebih kecil dan dipush ke array yang panjangnya lebih besar
    for (let i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
    }
    //sort array 1
    return array1.sort((a, b) => a - b);
  } else {
    for (let i = 0; i < array1.length; i++) {
      array2.push(array1[i]);
    }
    //sort array 2
    return array2.sort((a, b) => a - b);
  }
}

console.log(mergeSort([0, 3, 4, 1], [4, 6, 30]));
console.log(mergeSort([78, 97, 34, 34, 56, 76], [100, 120, 679, 356]));
console.log(mergeSort(123, 456));

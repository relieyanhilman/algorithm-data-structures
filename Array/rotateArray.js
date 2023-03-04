//program ini adalah untuk meng-rotate elemen-elemen array sejauh k, dimana k adalah non-negative
//inputnya ada 2, yaitu array dan k (rotator), dengan output adalah hasil rotate dari array tersebut
//brute force approach ==> buat array baru, lalu iterasi elemen array dimulai dari n.length-k hingga array.length-1; lalu dilanjutkan iterasi dari 0 hingga array.length-1;
//setiap iterasi, elemen di array utama akan dicopy ke array baru. (BELUM DITEMUKAN)

//approach lainnya adalah iterasi tiap elemen di array, lalu memindahkan elemen di iterasi tersebut sesuai nilai k. Elemen asli di indeks tersebut di simpan didalam hashmap
//beserta indeks yang seharusnya ditempati. (BELUM DITEMUKAN)

//approach yang ditemukan adalah melakukan reverse array menggunakan konsep 2 pointer. Reverse Array tersebut dilakukan sebanyak 3 kali, pertama untuk keseluruhan, kedua untuk bagian
//awal, dan yang ketiga untuk bagian akhir.
/*
Original input - 1,2,3,4,5,6,7
k = 3

1st step reverse entire array - 7,6,5,4,3,2,1
2nd step reverse 0 to k-1 - 5,6,7 ,4,3,2,1
3rd step reverse k to length-1 - 5,6,7, 1,2,3,4 <----- expected solution
*/
function rotate(nums, k) {
  if (k == 0) {
    return nums;
  }

  //alokasi array tambahan
  let arrayRotated = [];

  //iterasi elemen array utama mulai dari k+1 hingga array.length - 1
  //setiap iterasi, akan meng-copy elemen dari array utama ke array tambahan
  for (let i = nums.length - k; i < nums.length; i++) {
    arrayRotated.push(nums[i]);
  }

  //melanjutkan iterasi dari elemen yang terlewat (indeks 0 hingga indeks array.length-1)
  //meng-copy elemen dari array utama ke array tambahan
  for (let i = 0; i < nums.length - k; i++) {
    arrayRotated.push(nums[i]);
  }

  return arrayRotated;
}
//SOLUSI PERTAMA INI BERHASIL, TAPI TERNYATA DI SOALNYA GABOLEH RETURN ARRAY BARU MELAINKAN LANGSUNG NGUBAH ARRAY ITU SENDIRI

function rotate2(nums, k) {
  let hashMap = {};

  //iterasi tiap elemen, dan memindahkan elemen ke indeks sebesar array.length % (i +k)
  for (let i = 0; i < nums.length - k; i++) {
    //menyimpan elemen di indeks yang di-overwrite ke dalam hashMap dengan menyimpan indeks sebesar array.length % (i +k)
    hashMap[i + k - nums.length + k] = nums[i + k];

    nums[i + k] = nums[i];
  }

  //iterasi di hashMap untuk menempatkan elemen yang sebelumnya di overwrite
  Object.entries(hashMap).forEach(([key, value]) => {
    nums[Number(key)] = value;
  });

  //   for (let key in hashMap) {
  //     nums[key] = hashMap[parseInt(key)];
  //   }
  return nums;
}
//fungsi rotate2 bermasalah ketika key di hashmap bernilai -1

function rotate3(nums, k) {
  //jika k melebihi nums.length, maka sama saja 1 perputaran selesai jadi k%nums.length
  k = k % nums.length;

  function reverse(i, j) {
    while (i < j) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
      j--;
    }
  }
  //melakukan reverse pertama, kedua dan ketiga
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);

  return nums;
}

// console.log(rotate3([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));

let array = [1, 2, 3, 4, 5, 6, 7];
let end = array.splice(array.length - 3);
array.splice(0, 0, end);
console.log(end);
console.log(array);

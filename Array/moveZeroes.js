//program untuk memindahkan nominal 0 ke indeks terakhir suatu array

//input array, output array yang tersorted dimana angka 0 di indeks paling belakang
//brute force ==> iterasi cari angka 0 di array tersebut kemudian simpen indeksnya di hashmap
// kemudian pake splice untuk delete setiap elemen 0 pada array, dan push elemen 0 di array di indeks paling belakang

/*
//
//for (i =0;.......i = n)
//  if array[i] == 0{
        array.splice(i, 1);
        array.push(0)
}


*/

function moveZeroes(nums) {
  if (!Array.isArray(nums)) {
    throw Error("input bukan array");
  }

  //cek jika array adalah 0 atau bukan
  //jika nilainya 0, maka snowball++
  //jika nilainya tidak 0 dan udah ada 0 yg berantai (snowball> 0) maka elemen tersebut diganti jadi 0 dan di indeks (i-snowball) diganti jadi elemen sebelumnya

  let nolBerantai = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nolBerantai++;
    } else if (nolBerantai > 0) {
      let elemenOnIndex = nums[i];
      nums[i] = 0;
      nums[i - nolBerantai] = elemenOnIndex;
    }
  }
  return nums;
}

console.log(moveZeroes([0, 0, 1]));


//{WINDOW PATTERN}
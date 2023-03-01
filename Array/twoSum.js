//program untuk return 2 index yang sesuai yang ditambahkan hasilnya adalah target
//inputnya param1 = array, param2 = target
//contohnya input: nums = [2,7,11,15], target = 9
//          output [0,1]

//brute force ==> iterasi tiap elemen ke-i dengan elemen selain i dan mencoba ditambahkan hingga menemukan hasil yang sesuai target
//drawbacksnya bisa aja time complexity jadi O(n^2)

function twoSum(nums, target) {
  //iterasi elemen di tiap num, lalu mencocokkan dengan elemen selain i untuk kemudian ditambahkan
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //dicek apakah hasil pertambahan sesuai target, jika sesuai langsung return, jika tidak lanjut iterasi elemen berikutnya
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([3, 3], 6));

function twoSumRev(nums, target) {
  //buat object untuk menampung value yang udah pernah dideteksi beserta indeksnya
  let value = {};

  //iterasi tiap elemen pada array, dan cek dengan target, yaitu dengan target - array value
  for (let i = 0; i < nums.length; i++) {
    //jika target- array value ada di dalam object, maka langsung return indeks yang telah disimpan di object, jika ga ada di dalam object, insert array value beserta indeks nya ke object
    if (target - nums[i] in value) {
      return [value[target - nums[i]], i];
    } else {
      value[nums[i]] = i;
    }
  }
  return [];
}

console.log(twoSumRev([2, 7, 11, 15], 9));

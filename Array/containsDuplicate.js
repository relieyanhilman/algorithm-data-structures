//program ini adalah untuk mereturn true atau false bergantung apakah ada elemen array yang muncul lebih dari 2 kali
//inputnya adalah array, outputnya adalah boolean true jika dalam array ada yang muncul 2 kali, false jika tidak
//problemnya, harus dicek array atau ngga inputnya
//brute force approach. ==> iterasi setiap elemen yang ada di array, lalu menyimpan value yang sudah dicek ke hashmap. Jika pada iterasi selanjutnya
//value tersebut ada di hashmap, maka return true;
//performance dari algoritma ini adalah O(n)

function containsDuplicate(nums) {
  if (!Array.isArray(nums)) {
    throw Error("input bukan array");
  }

  //define hashMap
  let hashMap = {};

  //iterasi elemen pada array
  //dicek apakah elemen sudah ada di hashMap, jika sudah maka return true, jika belum, elemen tersebut ditambahkan ke hashMap
  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = true;
    } else {
      return true;
    }
  }
  //jika sampai iterasi terakhir, belum juga return true, maka return false
  return false;
}



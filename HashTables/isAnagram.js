//program untuk cek anagram
//contoh : input s: "anagram", t: "nagaram", output true, input s : "rat", t : "car", output: false
//brute force approach ==> pertama iterasi semua elemen di string s, lalu masukin ke hashMap beserta jumlahnya. Setelah itu iterasi input t, dan sejalan dengan itu
//dicek ke hashmap dan mengurangi jumlah di hashmap,, jika tiap value di hashmap bernilai 0, maka return true

function isAnagram(s, t) {
  let hashMap = {};

  //iterasi semua elemen s, dan taruh di hashMap beserta jumlahnya
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      hashMap[s[i]]++;
    } else {
      hashMap[s[i]] = 1;
    }
  }

  //iterasi semua elemen t, dan cocokkan dengan yang ada di hashMap, dan kurangi
  for (i = 0; i < t.length; i++) {
    if (!hashMap[t[i]]) {
      return false;
    }
    hashMap[t[i]]--;
  }

  //cek iterasi hashMap,, jika hasil akhir setiap value adalah 0, maka return true
  for (let key in hashMap) {
    if (hashMap[key] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("rat", "car"));

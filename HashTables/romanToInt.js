//program ini adalah untuk konversi roman to Integer
//input adalah string roman, outputnya adalah integer
//contohnya: input: "III" output: 3, input = "LVIII" output = 58

//brute force approach ==> menyimpan semua roman didalam hashMap dengan valuenya bergantung pada roman tersebut
//lalu dengan kondisi jika value berikutnya bernilai lebih besar, maka value sekarang akan menjadi pengurang value berikutnya tersebut (perlu ada concurrent sum)

function romanToInt(s) {
  //menyimpan value roman ke hashMap
  let hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //alokasi sum untuk menyimpan jumlah keseluruhan
  let sum = 0;

  //alokasi temp untuk menyimpan value, jika ada case pengurang value lebih besar di index berikutnya.
  let temp = hashMap[s[0]];

  //iterasi tiap string, jika string berikutnya bernilai sama maka value masuk ke temp. Jika value berikutnya bernilai lebih besar, maka value berikutnya akan dikurangi value temp
  //jika value berikutnya lebih kecil, langsung masuk ke sum
  if (s.length > 1) {
    for (let i = 1; i < s.length; i++) {
      if (hashMap[s[i]] < temp) {
        if (hashMap[s[i + 1]] > hashMap[s[i]]) {
          sum += temp;
          temp = hashMap[s[i]];
        } else {
          sum = sum + hashMap[s[i]] + temp;
          temp = 0;
        }
      } else if (hashMap[s[i]] > temp) {
        if (hashMap[s[i + 1]] > hashMap[s[i]]) {
          sum += temp;
          temp = hashMap[s[i]];
        } else {
          sum += hashMap[s[i]] - temp;
          temp = 0;
        }
      } else {
        temp += hashMap[s[i]];
      }
      console.log("currentValue", hashMap[s[i]]);
      console.log("sum", sum);
      console.log("temp", temp);
    }
  } else {
    return temp;
  }

  return sum;
}

// console.log(romanToInt("D"));

function romanToInt2(s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      total += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }
  return total;
}

console.log(romanToInt2("III"));

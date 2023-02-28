//ketika menghadapi interview question

/*
1. tanya input dan outputnya apa
2. tanya masalah sebenernya apa, ada memory performance, space complexity
3. ungkapin brute force solution apa
4. ungkapin brute force solution kenapa dan drawbacksnya
5. kasi komen dan cari solusi yang lebih baik
6. sebelum coding, coba urutin langkah2 nya dulu
7. modularisasi kode dan bagi ke beberapa part
8. coding
9. cek error
10.test
11.bilang ke interviewer dimana bisa diimprove
12. done







*/

function checkSecondParameter(param1, ...param2) {
  if (param2 !== undefined && param1 !== undefined) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

checkSecondParameter(1, 2, 3, 4, undefined);

//Membuat fungsi untuk reverse string:
//'Nama saya Relieyan'
//'nayeileR ayas amaN'

//1. inputnya string, outputnya string
//2. bisa jadi stringnya panjang banget --> memory limit
//3. brute force ==> ubah string jadi array --> buat array kosong baru--> iterasi dari index paling terakhir dan push ke array kosong tersebut //drawbacks perlu memory tambahan sebanyak O(n) tapi time complexity jadi O(n)
//   tidak perlu buat array --> tapi iterasi setiap index di array lakuin pop lalu unshift di array yang sama //drawbacksnya adalah time complexity jadi O(n^2) karena unshift, tapi memory complexity O(n)
//   karena memory ga begitu krusial, jadi pake solusi pertama

function reverseString(string) {
  //cek apakah type input adalah string
  if (!string || typeof string !== "string") {
    throw Error("input bukan string");
  }
  if (string.length < 2) {
    return string;
  }
  //alokasi array kosong
  const reverseArray = [];

  //ubah string jadi array ==> gausa diubah karena string di javascript udah kayak array
  //const stringToArray = string.split("");

  //mengambil elemen terakhir dari string lalu push ke array kosong
  const stringLength = string.length;
  for (let i = stringLength - 1; i >= 0; i--) {
    reverseArray.push(string[i]);
  }

  //return string hasil reverseArray ke string
  return reverseArray.join("");
}

//ini lebih clean
function reverseString2(string) {
  if (!string || typeof string !== "string") {
    throw Error("input bukan string");
  }
  if (string.length < 2) {
    return string;
  }

  return string.split("").reverse().join("");
}
// console.log(reverseString("tas hijau daun mantappu")); //harusnya jadi "uppatnam nuad uajih sat"
// console.log(reverseString("kardus itu rusak")); //harusnya jadi "kasur uti sudrak"
console.log(reverseString2("kardus itu rusak"));

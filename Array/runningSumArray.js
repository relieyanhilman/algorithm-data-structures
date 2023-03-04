//program ini adalah untuk return array hasil dari kalkulasi beruntun elemen2 pada array tersebut
//input adalah berupa array dan output berupa array yang elemen2 tersebut sudah terkalkulasi
//contoh : nums = [1,2,3,4], output: [1,3,6,10]
//brute force approach : akan dilakukan iterasi masing2 elemen, secara bersamaan akan ditampung hasil pertambahan pada suatu variabel 'sum',
// kemudian ketika iterasi berakhir direturn sum tersebut

function runningSum(nums) {
  //define variabel sum untuk menampung hasil pertambahan
  let sum = 0;

  //define array yang nantinya setiap pertambahan tersebut akan ditampung pada array ini
  let calculatedArray = [];

  //iterasi tiap elemen pada array utama
  for (let i = 0; i < nums.length; i++) {
    //dilakukan kalkulasi sum dengan elemen pada array
    sum = sum + nums[i];

    //push hasil kalkulasi tersebut ke array baru
    calculatedArray.push(sum);
  }

  //return array hasil kalkulasi
  return calculatedArray;
}

console.log(runningSum([3, 1, 2, 10, 1]));

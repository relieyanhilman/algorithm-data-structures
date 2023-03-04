//program untuk mencari subarray dengan jumlah terbesar
//contoh Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//             Output: 6

//input adalah array, output adalah jumlah dari elemen array tersebut
//bruteforce ==> iterasi dari indeks ke-0 dan terus ditambahin hingga mencapai indeks akhir, namun jika ditengah hasil sum bernilai 0, maka indeks start akan direstart di indeks berikutnya

function maxSubArray(nums) {
  if (nums.length < 2) {
    return nums[0];
  }
  //define variable maxSum untuk menampung jumlah terbesar
  let maxSum = nums[0];
  let sum = 0;

  //iterasi dari indeks pertama hingga terakhir sekaligus dijumlahkan, jika di tengah jumlah tersebut bernilai 0, maka indeks start akan dimulai pada indeks berikutnya
  for (let i = 0; i < nums.length; i++) {
    //jika terdapat negatif prefix, maka negatif prefix tersebut dihilangkan dan mulai di elemen index berikutnya.
    if (sum < 0) {
      sum = 0;
    }
    sum = sum + nums[i];

    //jika sum > maxSum, maka assign maxSum = sum
    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  //return sum
  return maxSum;
}

console.log(maxSubArray([-2, -1]));

//[LOGIC SUM MAXSUM PATTERN]

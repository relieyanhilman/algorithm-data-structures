//program ini return middle index, dimana sum dari index bagian kanan middle index sama dengan sum dari index bagian kiri middle index
//input adalah array, output adalah middle index, jika tidak ada middle index tersebut, maka return -1
//contoh : nums = [1,7,3,6,5,6]
// output: 3
//brute force approach : iterasi array dari bagian kiri dan bagian kanan secara simultan hingga index bagian kiri > bagian kanan. Kemdudian tiap iterasi tersebut juga dilakukan
//sum secara simultan, jika sum salah satu bagian lebih kecil, maka iterasi dilanjutkan pada bagian tersebut

function pivotIndex(nums) {
  //define index paling kiri dan paling kanan dari array
  let left = 0;
  let right = nums.length - 1;

  //define sumLeft dan sumRight untuk menampung hasil sum simultan dari kedua bagian (dimulai dari elemen pertama paling kiri dan elemen pertama paling kanan)
  let sumLeft = nums[left];
  let sumRight = nums[right];

  //iterasi dimulai, jika pada iterasi sumLeft dan sumRight bernilai sama, maka return left+1 atau right-1 tersebut
  while (left < right) {
    console.log("LEFT", "RIGHT", left, right);
    console.log("SUMLEFT", "SUMRIGHT", sumLeft, sumRight);
    if (sumLeft < sumRight) {
      left++;
      sumLeft = sumLeft + nums[left];
    } else if (sumRight < sumLeft) {
      right--;
      sumRight = sumRight + nums[right];
    } else {
      if (left + 1 == right) {
        return -1;
      } else {
        return left + 1;
      }
    }
  }
  return -1;
}

//CARA DI ATAS TIDAK BISA MENSOLVE YG CASE KETIGA

// console.log(pivotIndex([2, 1, -1]));

//cara di bawah ini adalah memanfaatkan fakta bahwa totalSums - leftSums - currentSum = rightSum

function pivotIndex2(nums) {
  //alokasi leftSum dan RightSum
  let leftSums = 0;
  let totalSums = 0;

  //hitung totalSums
  for (let i = 0; i < nums.length; i++) {
    totalSums += nums[i];
  }

  //iterasi dari 0 hingga nums.length, lalu bersamaan dengan itu, hitung RightSums = totalSums-currentSums, jika rightSums == leftSums return index
  for (let j = 0; j < nums.length; j++) {
    if (leftSums * 2 == totalSums - nums[j]) {
      return j;
    }
    //jika ngga sama, maka leftSums += currentSums
    leftSums += nums[j];
  }
  return -1;
}
console.log(pivotIndex2([2, 1, -1]));

console.log("dsajs");
// DSA JS 1
// https://replit.com/@marshal4world/DSA-JS-Sept-23#index.js

// console.log(Given coordinates of a point (x,y) in 2D plane, find in which quadrant does this point lie.)
// coordinates is the fourth part x, -x, y, -y
function findQuadarnt(x, y) {
  if (x > 0 && y > 0) {
    return 1
  } else if (x < 0 && y > 0) {
    return 2
  } else if (x < 0 && y < 0) {
    return 3
  } else if (x > 0 && y < 0) {
    return 4
  }
}
console.log(
  "You are given a positive integer 'N'. You have to find the sum of first 'N' natural numbers."
)
// n = 1+2+3+4+5+6+7+8+9 = 55
// to get the nature sum we can refer our school days formula n*(n+1)/2 === js (n*(n+1)/2)
function naturalSum(n) {
  // 1
  //   const sum = (n + 1) * n
  //   const result = sum / 2
  //   return result;

  // 2
  //   sum = 0
  sum = (n * (n + 1)) / 2
  return sum
}
console.log('naturalSum', naturalSum(10))

function leapYearBasic(N) {
  if (N % 400 == 0) {
    return true
  } else if (N % 100 == 0) {
    return false
  } else if (N % 4 == 0) {
    return true
  } else {
    return false
  }
}

console.log('LeapYearBasic', leapYearBasic(1600))

// / TODO: Implement this method

const arr = [1, 3, 4, 5, 1, 9]
function findElement(n, arr, x) {
  for (let idx = 0; idx < n; idx++) {
    if (arr[idx] == n) {
      return x
    } else {
      return 0
    }
  }
}

console.log('Find an Element left most index', findElement())

// Find the Smallest Number

const array = [7, 2, 9, 1, 5, 3]
const findSmallNum = (array) => {
  if (array.length === 0) {
    return undefined
  }
  const sortArr = array.sort((a, b) => a - b)
  const smallNum = sortArr[0]

  return smallNum
}
console.log(findSmallNum(array))

function checkMagicSquare(n, matrix) {
  let base_sum

  for (let i = 0; i < n; i++) {
    // store the sum here to match the other column are equal
    base_sum += matrix[0][i]
  }
  let row_sum = 0
  let col_sum = 0
  let primery_diag_sum = 0
  let second_diag_sum = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // to use for row sum
      row_sum += matrix[i][j]
      // to use for col sum
      col_sum += matrix[j][i]

      if (i == j) {
        primery_diag_sum += matrix[i][j]
      }
      if (i + j == n - 1) {
        second_diag_sum += matrix[i][j]
      }
    }
    if (row_sum != base_sum || col_sum != base_sum) {
      return false
    }
    row_sum = 0
    col_sum = 0
  }
  if (primery_diag_sum != base_sum || second_diag_sum != base_sum) {
    return false
  }
  return true
}

console.log('2D array magic square box')

// 1. to cyclicRotation the created the function which takes three argument N= number of elements in the array, array = the array of element, K= the number of position to rotate the array
// 2. creted the blank rotatedArray array to store the rotated array
// 3. made the first loop starting from K (element ) to the end of the array ie N and the pushed to the rotatedArray array
// 4.took the another loop it start from 0 and until the i is less than k (arr of position)
//  this loop will iterate unit k -1 because in the frist loop we are iterating the arr till the k. pushed the element of index i of the input arr array to the rotatedArray
//  return the rotatedArray to get the function result

function cyclicRotation(N, arr1, K) {
  let rotatedArray = []
  for (let i = K; i < N; i++) {
    rotatedArray.push(arr1[i])
  }

  for (i = 0; i < K; i++) {
    rotatedArray.push(arr1[i])
  }
  return rotatedArray
}

const N = 5
let arr1 = [1, 2, 3, 4, 5]
const K = 2

const rotatedArr = cyclicRotation(N, arr1, K)

console.log('Cyclic Rotion', rotatedArr)
console.log('Cyclic Rotion 5', cyclicRotation(2, [1, 2, 3, 4, 5], 3))

console.log('Binary Search, Find the element, Search Target using O(logN')
/*
N: The number of elements in the array.
A: An array of sorted integers in which we want to search for the target value.
X: The target value we are searching for.
*/
function binarySearch(N, A, X) {
  let start = 0
  let end = N - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (A[mid] < X) {
      start = mid + 1
    } else if (A[mid] > X) {
      end = mid - 1
    } else {
      return mid
    }
  }

  return -1
}

console.log(
  'Given a string, count the total number of vowels present in that string.'
)

const isWovel = (ch) => {
  return (
    ch === 'A' ||
    ch === 'E' ||
    ch === 'O' ||
    ch === 'U' ||
    ch === 'I' ||
    ch === 'a' ||
    ch === 'e' ||
    ch === 'o' ||
    ch === 'u' ||
    ch === 'i'
  )
}
function countVowels(word) {
  let count = 0
  for (let i = 0; i < word.length; i++) {
    if (isWovel(word[i])) {
      count++
    }
  }
  if (count == 0) {
    return 0
  }
  return count
}

console.log(countVowels('q'))

// CyclicRatation
// 1. using if condition checking two condition, N is less than and equal to 1 || if K is a muliple of n, using modular operator
//  number of posion to rotate (k), the number of elements in the array N
// 2. Inside the condition if condtion is true  return arr3 (original input array) because there is no need to ratate.
// it means when array has 1 or fewer elements or whwn k is multiple of n there is no needed to rotation.
// 3. to calculate the effective numbers rotations I have took the var "rotations",  needed by taking the remainder (%) of K devided by N. This ensures that rotaion is the range [0, n-1] and reprents the number of position to rotate.
// 4. took the var firstPart and creating array new using arr3 slice method. it takes elements from begining of array index 0 but not included the index N- rotations. 
// 5. to rotate the become new begining after rotaion . I took var secondPart and create anothee new array using slice method. It start from input arr3 stating from index till N -rotations;
// 6. then I concat the secondPart with firstPart and stored in the roatedArray
// 7. to ge the result return the  roatedArray

// function cyclicRotation(N, arr3, K){
//     if( N <= 1 || K % N ===0){
//         return arr3
//     }
//     const rotations =  K % N
//     const firstPart = arr3.slice(0, N - rotations)
//     const secondPart = arr3.slice(N - rotations);

//     const roatedArray = secondPart.concat(firstPart)
//     return roatedArray


// }

// const n = 5;
// const arr11 = [1, 2, 3, 4, 5];
// const k = 2;

// console.log(cyclicRotation(n, arr11, k))

console.log("Question ==> Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.");
// travers through the string
// check the it is already capital letter of starting word
// check the space before first Letter
// capital the no-sapce word first letter after space

// Logic
// for loop to travers the array
// condition operator
// string are mutable so we cant change it directly used here String fromcharcode charCodeAt method


// Code

function capitalise(paragraph) {
  let ans = "";
  for (let i = 0; i < paragraph.length; i++){
    if(i == 0 && paragraph[i] != ' ' && paragraph[i]>= 'a' && paragraph[i] <= 'z'){
        ans += String.fromCharCode(paragraph[i].charCodeAt()-32)

    }else if (i>0 && paragraph[i-1] == ' ' && paragraph[i] != ' ' && paragraph[i]>= 'a' && paragraph[i] <= 'z'){
        ans += String.fromCharCode(paragraph[i].charCodeAt()-32)

    }else{
        // keep the letters as it is 
        ans+= paragraph[i];
    }

  }
  return ans
}
console.log(capitalise("i am Working in lsdigital"));

console.log("Question ==> Given a string, count the total number of vowels present in that string.");

// 1. 
// 2. convert upper case or lowercase to the input
// 3. check isVowel using or not 

// const isVowel = (ch)=>{
//     // let ch = "Logicserve"
//     ch.toUpperCase();
//     return (ch === 'A' || ch === 'E' || ch === 'I'|| ch === 'O' || ch === 'U')
// }
// // console.log(isVowel("A"));

// const getCount = (str, n)=>{
//     if(n == 1){
//         return isVowel(n-1)
//     }
//     return getCount(str, n-1) + isVowel(str, n-1)
// }
// console.log("Get",getCount('Logicserve', 2));

// function greet() {
//     var message = "Hello, world!";
// }
// greet();
// console.log(message);

var num = "42";
var result = num + 2;
console.log(result);

var x = 3;
var result;
switch (x) {
    case 1:
        result = "One";
        break;
    case 2:
        result = "Two";
        break;
    default:
        result = "Other";
        break;
}
// console.log(result);
console.log("Question ==>  generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)");

function rotateImage(matrix) {
    let n = matrix.length
    for(let i =0; i < n; i ++ ){
        for (let j = i +1;  j < n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for(let i =0; i < n; i++){
        matrix[i].reverse()
    }
    return matrix
}

// function rotateImage(matrix) {
//     const n = matrix.length;
  
//     // Transpose the matrix
//     for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j < n; j++) {
//         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//       }
//     }
  
//     // Reverse each row
//     for (let i = 0; i < n; i++) {
//       matrix[i].reverse();
//     }
  
//     return matrix;
//   }
  
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   const rotatedMatrix = rotateImage(matrix);
//   console.log(rotatedMatrix);

function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // Check if the first row contains a zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if the first column contains a zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // Mark zeros in the first row and column based on the rest of the matrix
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set zeros in the entire matrix based on marks in the first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set zeros in the first row if needed
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Set zeros in the first column if needed
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

// Example usage:
const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];

const resultz = setZeroes(matrix);
console.log(resultz);

  
  
//console.log("dsajs");
// DSA JS 1
// https://replit.com/@marshal4world/DSA-JS-Sept-23#index.js

// console.log(Given coordinates of a point (x,y) in 2D plane, find in which quadrant does this point lie.)
// coordinates is the fourth part x, -x, y, -y

// https://gist.github.com/ayush-crio/0a3555588ce4d2bed063df49fda8dc90
// https://gist.github.com/ayush-crio/5d45238bfee5923b7fbe9755255fca97
// https://gist.github.com/ayush-crio/17f71501a0df11eac5bc9c280ec248e5
// https://gist.github.com/ayush-crio/0a3555588ce4d2bed063df49fda8dc90
// https://gist.github.com/ayush-crio/5d45238bfee5923b7fbe9755255fca97

// Level 3 Interview Blitz Session 1
// https://docs.google.com/forms/d/e/1FAIpQLSe4dMkmD1LmlGnUtsmiaK_oxBvabndDPEcAibFKmKGiLJTY1A/viewform


// function findQuadarnt(x, y) {
//   if (x > 0 && y > 0) {
//     return 1
//   } else if (x < 0 && y > 0) {
//     return 2
//   } else if (x < 0 && y < 0) {
//     return 3
//   } else if (x > 0 && y < 0) {
//     return 4
//   }
// }
// console.log(
//   "You are given a positive integer 'N'. You have to find the sum of first 'N' natural numbers."
// )
// // n = 1+2+3+4+5+6+7+8+9 = 55
   
// // to get the nature sum we can refer our school days formula n*(n+1)/2 === js (n*(n+1)/2)
// function naturalSum(n) {
//   // 1
//   //   const sum = (n + 1) * n
//   //   const result = sum / 2
//   //   return result;

//   // 2
//   //   sum = 0
//   sum = (n * (n + 1)) / 2
//   return sum
// }
// console.log('naturalSum', naturalSum(10))

// function leapYearBasic(N) {
//   if (N % 400 == 0) {
//     return true
//   } else if (N % 100 == 0) {
//     return false
//   } else if (N % 4 == 0) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log('LeapYearBasic', leapYearBasic(1600))

// // / TODO: Implement this method

// const arr = [1, 3, 4, 5, 1, 9]
// function findElement(n, arr, x) {
//   for (let idx = 0; idx < n; idx++) {
//     if (arr[idx] == n) {
//       return x
//     } else {
//       return 0
//     }
//   }
// }

// console.log('Find an Element left most index', findElement())

// // Find the Smallest Number

// const array = [7, 2, 9, 1, 5, 3]
// const findSmallNum = (array) => {
//   if (array.length === 0) {
//     return undefined
//   }
//   const sortArr = array.sort((a, b) => a - b)
//   const smallNum = sortArr[0]

//   return smallNum
// }
// console.log(findSmallNum(array))

// function checkMagicSquare(n, matrix) {
//   let base_sum

//   for (let i = 0; i < n; i++) {
//     // store the sum here to match the other column are equal
//     base_sum += matrix[0][i]
//   }
//   let row_sum = 0
//   let col_sum = 0
//   let primery_diag_sum = 0
//   let second_diag_sum = 0

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       // to use for row sum
//       row_sum += matrix[i][j]
//       // to use for col sum
//       col_sum += matrix[j][i]

//       if (i == j) {
//         primery_diag_sum += matrix[i][j]
//       }
//       if (i + j == n - 1) {
//         second_diag_sum += matrix[i][j]
//       }
//     }
//     if (row_sum != base_sum || col_sum != base_sum) {
//       return false
//     }
//     row_sum = 0
//     col_sum = 0
//   }
//   if (primery_diag_sum != base_sum || second_diag_sum != base_sum) {
//     return false
//   }
//   return true
// }

// console.log('2D array magic square box')

// // 1. to cyclicRotation the created the function which takes three argument N= number of elements in the array, array = the array of element, K= the number of position to rotate the array
// // 2. creted the blank rotatedArray array to store the rotated array
// // 3. made the first loop starting from K (element ) to the end of the array ie N and the pushed to the rotatedArray array
// // 4.took the another loop it start from 0 and until the i is less than k (arr of position)
// //  this loop will iterate unit k -1 because in the frist loop we are iterating the arr till the k. pushed the element of index i of the input arr array to the rotatedArray
// //  return the rotatedArray to get the function result

// function cyclicRotation(N, arr1, K) {
//   let rotatedArray = []
//   for (let i = K; i < N; i++) {
//     rotatedArray.push(arr1[i])
//   }

//   for (i = 0; i < K; i++) {
//     rotatedArray.push(arr1[i])
//   }
//   return rotatedArray
// }

// const N = 5
// let arr1 = [1, 2, 3, 4, 5]
// const K = 2

// const rotatedArr = cyclicRotation(N, arr1, K)

// console.log('Cyclic Rotion', rotatedArr)
// console.log('Cyclic Rotion 5', cyclicRotation(2, [1, 2, 3, 4, 5], 3))

// console.log('Binary Search, Find the element, Search Target using O(logN')
// /*
// N: The number of elements in the array.
// A: An array of sorted integers in which we want to search for the target value.
// X: The target value we are searching for.
// */
// function binarySearch(N, A, X) {
//   let start = 0
//   let end = N - 1

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)

//     if (A[mid] < X) {
//       start = mid + 1
//     } else if (A[mid] > X) {
//       end = mid - 1
//     } else {
//       return mid
//     }
//   }

//   return -1
// }

// console.log(
//   'Given a string, count the total number of vowels present in that string.'
// )

// const isWovel = (ch) => {
//   return (
//     ch === 'A' ||
//     ch === 'E' ||
//     ch === 'O' ||
//     ch === 'U' ||
//     ch === 'I' ||
//     ch === 'a' ||
//     ch === 'e' ||
//     ch === 'o' ||
//     ch === 'u' ||
//     ch === 'i'
//   )
// }
// function countVowels(word) {
//   let count = 0
//   for (let i = 0; i < word.length; i++) {
//     if (isWovel(word[i])) {
//       count++
//     }
//   }
//   if (count == 0) {
//     return 0
//   }
//   return count
// }

// console.log(countVowels('q'))

// // CyclicRatation
// // 1. using if condition checking two condition, N is less than and equal to 1 || if K is a muliple of n, using modular operator
// //  number of posion to rotate (k), the number of elements in the array N
// // 2. Inside the condition if condtion is true  return arr3 (original input array) because there is no need to ratate.
// // it means when array has 1 or fewer elements or whwn k is multiple of n there is no needed to rotation.
// // 3. to calculate the effective numbers rotations I have took the var "rotations",  needed by taking the remainder (%) of K devided by N. This ensures that rotaion is the range [0, n-1] and reprents the number of position to rotate.
// // 4. took the var firstPart and creating array new using arr3 slice method. it takes elements from begining of array index 0 but not included the index N- rotations. 
// // 5. to rotate the become new begining after rotaion . I took var secondPart and create anothee new array using slice method. It start from input arr3 stating from index till N -rotations;
// // 6. then I concat the secondPart with firstPart and stored in the roatedArray
// // 7. to ge the result return the  roatedArray

// // function cyclicRotation(N, arr3, K){
// //     if( N <= 1 || K % N ===0){
// //         return arr3
// //     }
// //     const rotations =  K % N
// //     const firstPart = arr3.slice(0, N - rotations)
// //     const secondPart = arr3.slice(N - rotations);

// //     const roatedArray = secondPart.concat(firstPart)
// //     return roatedArray


// // }

// // const n = 5;
// // const arr11 = [1, 2, 3, 4, 5];
// // const k = 2;

// // console.log(cyclicRotation(n, arr11, k))
// console.log("Given two arrays A and B, write a function to compute their intersection.Note: Each element in the result should appear as many times as it shows in both arrays. The result needs to be in sorted order.");

// function intersectionOfTwoArraysBasic(n, arry1, m, array2){
//   const hashMap = new Map()
//   for(const el of arry1){
//     let freqHashMap= hashMap.get(el) || 0;

//     hashMap.set(el, hashMap+1)
//   }

//   let res = []

//   for (const ele of array2){
//     let freqHashMp = hashMap.get(ele) || 0;
//     if(freqHashMp > 0){
//       res.push(ele)

//       hashMap.set(ele, freqHashMp -1)
//     }
//   }

//   return res
// }



// console.log("Question ==> Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.");
// // travers through the string
// // check the it is already capital letter of starting word
// // check the space before first Letter
// // capital the no-sapce word first letter after space

// // Logic
// // for loop to travers the array
// // condition operator
// // string are mutable so we cant change it directly used here String fromcharcode charCodeAt method


// // Code

// function capitalise(paragraph) {
//   let ans = "";
//   for (let i = 0; i < paragraph.length; i++){
//     if(i == 0 && paragraph[i] != ' ' && paragraph[i]>= 'a' && paragraph[i] <= 'z'){
//         ans += String.fromCharCode(paragraph[i].charCodeAt()-32)

//     }else if (i>0 && paragraph[i-1] == ' ' && paragraph[i] != ' ' && paragraph[i]>= 'a' && paragraph[i] <= 'z'){
//         ans += String.fromCharCode(paragraph[i].charCodeAt()-32)

//     }else{
//         // keep the letters as it is 
//         ans+= paragraph[i];
//     }

//   }
//   return ans
// }
// console.log(capitalise("i am Working in lsdigital"));

// console.log("Question ==> Given a string, count the total number of vowels present in that string.");

// // 1. 
// // 2. convert upper case or lowercase to the input
// // 3. check isVowel using or not 

// // const isVowel = (ch)=>{
// //     // let ch = "Logicserve"
// //     ch.toUpperCase();
// //     return (ch === 'A' || ch === 'E' || ch === 'I'|| ch === 'O' || ch === 'U')
// // }
// // // console.log(isVowel("A"));

// // const getCount = (str, n)=>{
// //     if(n == 1){
// //         return isVowel(n-1)
// //     }
// //     return getCount(str, n-1) + isVowel(str, n-1)
// // }
// // console.log("Get",getCount('Logicserve', 2));

// // function greet() {
// //     var message = "Hello, world!";
// // }
// // greet();
// // console.log(message);

// var num = "42";
// var result = num + 2;
// console.log(result);

// var x = 3;
// var result;
// switch (x) {
//     case 1:
//         result = "One";
//         break;
//     case 2:
//         result = "Two";
//         break;
//     default:
//         result = "Other";
//         break;
// }
// // console.log(result);
// console.log("Question ==>  Print Matrix in Spiral Order");

// function rotateImage(matrix) {
//     let n = matrix.length
//     for(let i =0; i < n; i ++ ){
//         for (let j = i +1;  j < n; j++){
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
//         }
//     }

//     for(let i =0; i < n; i++){
//         matrix[i].reverse()
//     }

//     return matrix
// }

// // function rotateImage(matrix) {
// //     const n = matrix.length;
  
// //     // Transpose the matrix
// //     for (let i = 0; i < n; i++) {
// //       for (let j = i + 1; j < n; j++) {
// //         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
// //       }
// //     }
  
// //     // Reverse each row
// //     for (let i = 0; i < n; i++) {
// //       matrix[i].reverse();
// //     }
  
// //     return matrix;
// //   }
  
// // const matrix = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9],
// //   ];
  
// //   const rotatedMatrix = rotateImage(matrix);
// //   console.log(rotatedMatrix);

// console.log("Increment number represented as array");
// function incrementNumber(N, A) {
//   A.reverse();

//   let carry = 1;
//   for(let i =0; i < A.length; i++){
//       let sum = A[i] + carry;
//       A[i] = sum%10;
//       carry = Math.floor(sum/10)
//   }

//   if(carry){
//     // A.unshift(carry)
//       A.push(carry)
//   }
//   A.reverse()

//   return A
// }

// console.log(incrementNumber(1, [1,3,9,9]));

// console.log("Set Matrix Rows and Columns to Zero");
// function setMatrixZeroes(matrix) {
//   const m = matrix.length;
//   const n = matrix[0].length;

//   let firstRowZero = false;
//   let firstColZero = false;

//   // check the first row contains 0
//   for(let j = 0; j < n; j++){
//       if(matrix[0][j]===0){
//           firstRowZero = true;
//           break
//       }
//   }
//   // check first column contains the 0
//   for(let i =0; i < m; i++){
//       if(matrix[i][0] ===0){
//           firstColZero = true;
//           break
//       }
//   }
//   // mark zero in first row and column
//   for(let i =1; i < m; i++){
//       for(let j = 1; j < n; j++){
//           if(matrix[i][j]===0){
//               matrix[i][0] = 0;
//               matrix[0][j] = 0
//           }
//       }
//   }
//   // set zeros in the entire matrix based on marked first row and column
//   for(let i =1; i < m ; i++){
//       for(let j =1; j <n ; j++){
//           if(matrix[i][0] === 0 || matrix[0][j] === 0){
//               matrix[i][j] = 0
//           }
//       }
//   } 
//   // Sets zeros in the first row if needd
//   if(firstRowZero) {
//       for(let j =0; j < n; j++){
//           matrix[0][j] = 0
//       }
//   }
//   // Sets zeros to the colulm if needed
//   if(firstColZero){
//       for(let i =0; i < m; i++){
//           matrix[i][0] = 0
//       }
//   }
//   return matrix
// }



// // Example usage:
// const matrix = [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5]
// ];

// const resultz = setMatrixZeroes(matrix);
// console.log(resultz);

// let matrixN = [];
// matrixN[0] = [1, 2, 3];
// matrixN[1] = [4, 5];
// matrixN[2] = [6, 7, 8, 9];
// console.log(matrixN[1].length);


// let matrix1 = [[1, 2], [3, 4]];
// let transposedmatrix1 = Array.from({length: matrix1[0].length}, () => Array(matrix1.length).fill(0));
// for (let i = 0; i < matrix1.length; i++) {
//     for (let j = 0; j < matrix1[i].length; j++) {
//         transposedmatrix1[j][i] = matrix1[i][j];
//     }
// }
// console.log("Trans",transposedmatrix1[1][0]);

// console.log("Question => Find first missing positive number in array");

// function findMissPostNum(n, arr){

//   let setArry = new Set();

//   for(let i =0 ; i < arr.length; i++){
//     setArry.add(arr[i])
//   }

//   console.log(`Input array: ${arr}`);

//   for(let i = 1; i < n+1; i++){
//     if(!setArry.has(i)){
//       // return i
//       console.log(`The first missing positive number is: ${i}`);
//       return
//     }
//   }
//   // return undefined
//     console.log(`There is no missing positive number.`);
// }

// // function firstMissingPositiveNum(n, arr) {
// //   // Create a set to store seen numbers.
// //   const seenNumbers = new Set();

// //   // Add positive elements from the array to the set.
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > 0) {
// //       seenNumbers.add(arr[i]);
// //     }
// //   }

// //   // Print the input array
// //   console.log(`Input array: ${arr}`);

// //   // Check for missing numbers from 1 to n+1.
// //   for (let i = 1; i <= n + 1; i++) {
// //     if (!seenNumbers.has(i)) {
// //       console.log(`The first missing positive number is: ${i}`);
// //       return;
// //     }
// //   }

// //   // No missing positive number found.
// //   console.log(`There is no missing positive number.`);
// // }

// // Example usage
// const n = 7;
// const arr2 = [1, 2, 3,4, 5,];
// console.log(findMissPostNum(n, arr2));

// console.log("Question => Find if the string permutation can form a palindrome");

// // function isPermutationPalidrome(s){
// //   let freQuencyMap = new Map();

// //   for(let i = 0; i < s.length; i++){
// //       if(freQuencyMap.has(s[i])){
// //           freQuencyMap.set(s[i], freQuencyMap.get(s[i])+1)
// //       }else {
// //           freQuencyMap.set(s[i], 1)
// //       }
// //   }
// //   let oddFrquency = 0;

// //   for( let [key, value] of freQuencyMap){
// //       if(value % 2!=0){
// //           oddFrquency = oddFrquency+1
// //       }
// //       if(oddFrquency > 1){
// //           return false
// //       }
// //   }
// //   return true
// // }


// // function isPermutationPalindrome(str){
// //   // create a new map object to store the str each frequency

// //   let frequencyMap = new Map();

// //   // iterate the STR
// //   for(let i =0 ; i < str.length; i++){
// //       // now check if current charector is present the frequencyMap
// //       if(frequencyMap.has(str[i])){
// //         // if charector in present in the frequencyMap than increment the COUNT of that charector in the map by 1
// //         frequencyMap.set(str[i], frequencyMap.get(str[1]) +1)
// //       }else{
// //         // if the charector is not present, it adds the charector to the map with the count of 1
// //         frequencyMap.set(str[i], 1)
// //       }
// //   }

// //   // get empty var to store the odd frequency
// //   let oddFrequency = 0;
// //   // iterate the loop over each key and value pair in the frequencyMap
// //   for(let [key, value] of frequencyMap){
// //     // check the charector value is odd
// //     if(value % 2 != 0){
// //       // if value is odd than it increament the oddFrequency value by 1
// //       oddFrequency = oddFrequency +1
// //     }
// //     // if there are more than 1 oddFrequency charector in the string the return false
// //     if(oddFrequency > 1){
// //       return false
// //     }
// //   }

// // return true

// // }
// // // Test cases
// // const str1 = 'tactcoa';
// // const str2 = 'tactco';
// // const str3 = 'apple';

// // console.log(`'${str1}' is a permutation of a palindrome: ${isPermutationPalindrome(str1)}`);
// // console.log(`'${str2}' is a permutation of a palindrome: ${isPermutationPalindrome(str2)}`);
// // console.log(`'${str3}' is a permutation of a palindrome: ${isPermutationPalindrome(str3)}`);


// // console.log("Question => Reverse Order of Words in a String");
// // function reverseWordsInString(str){
// //   // temp var that will be used to store temporary individual word
// //   let tempStr = "";
// //   // to store the reversd word from temp var
// //   let res = []; //stack
// //   // to hold the eventully reversed string
// //   let finalReesultInStr = ""
// // // to append the space at the end of string. This is done for simplify the logic for identify the last world in the string
// //   str = str + " ";

// //   // iterating loop till str and checked current charector(str[i]) is not space. 
// //   // if current charector has space than appended to the temStr
// //   for ( let i =0; i < str.length; i++){
// //     if(str[i]!= " "){
// //       tempStr = tempStr + str[i]
// //     }
// //     // else need to check tempStr is not empty and current charector is space
// //     else if (str[i] !="" && str[i] == " "){
// //       // if the both condition are met, the tempStr add to the res array and empty the tempStr to store the another charector
// //       res.push(tempStr);
// //       tempStr = ""
// //     }
// //   }

// //   // revers the order of word in the res Array
// //   res.reverse();
// //   // check the if res is empty return finalReesultInStr
// //   if(res.length ==0){
// //     return finalReesultInStr
// //   }

// //   // add the first element of the res array to the finalReesultInStr
// //   finalReesultInStr = finalReesultInStr + res[0]

// //   // iterate the over the remaining the res array. adding each element to the finalReesultInStr with a space before it

// //   for(let i =1; i < res.length; i++){
// //     finalReesultInStr = finalReesultInStr + " ";
// //     finalReesultInStr = finalReesultInStr + res[i]
// //   }
// //   return finalReesultInStr
 
// // }

// // const str = "This is a sentence to be reversed.";
// // const reversedStr = reverseWordsInString(str);
// // console.log(`Original string: ${str}`);
// // console.log(`Reversed string: ${reversedStr}`);

// console.log("Question => Find Pair with Given Sum in Sorted Array");
// // here we are using the two pointer approach
// /* function twoSumInSortedArray(n, arr, target_sum) {
//     let L =0, R = n-1;  
//     while ( L<R){
//         if(arr[L]+arr[R] > target_sum){
//             R--;

//         }else if(arr[L]+arr[R] < target_sum){
//             L++

//         }else{
//             return true

//         }
//     } 
//     return false
// } */

// console.log("Question => Find Triplet with Maximum Sum in Unsorted Array");
// function maxSumTriplet(n, arr2) {
//  let maxTripletSum =0;
//  for(let i =1; i < n-1; i++){
//   let b = arr2[i]

//   // find the max value which is less than b
//   let maxA = 0;
//   for( let j = i-1; j >=0; j --){
//     if(arr2[j]<b){
//       maxA = Math.max(arr2[j], maxA)
//     }
//   }

//   // find the c which is greater than b
//   let maxC = 0;
//   for(let j = i+1; j < n ; j++ ){
//     if(arr2[j] > b){
//       maxC = Math.max(arr2[j], maxC)
//     }
//   }
//   if(maxA > 0 && maxC > 0){
//     let currentTripletSum = maxA + b + maxC
//     if(currentTripletSum > maxTripletSum){
//       maxTripletSum = currentTripletSum
//     }
    
//   }
  
//  }

//  return maxTripletSum

// }
// const n1 = 7; // length of array
// const arr3 = [3, 7, 4, 2, 5, 7, 5];
// const n3 = 4; // length of array
// const arr4 = [5, 2, 4, 5];
// const n2 = 3; // length of array
// const arr5 = [3, 2, 1];
// console.log(maxSumTriplet(n1 ,arr3));
// console.log(maxSumTriplet(n3 ,arr4));
// console.log(maxSumTriplet(n2 ,arr5));

// console.log("Question => Merge Two Sorted Arrays");
// /* 
// function mergeSortedArray(m, nums1, n, nums2) {
//   let i =0;
//   let j =0;
//   let k =0 ;

//   let nums3 = new Array(m + n);

//     while(i < m && j < n){
//       if(nums1[i] < nums2[j]){
//         nums3[k] = nums1[i];
//         k++
//         i++
//       }else{
//         nums3[k]= nums2[j];
//         k++
//         j++
//       }
//     }
//     while(i<m){
//       nums3[k] = nums1[i];;
//       k++;
//       i++
//     }
//     while(j<n){
//       nums3[k] = nums2[j];;
//       k++;
//       j++
//     }
//     return nums3
// }
// const nums1 = [1, 2, 3];
// const nums2 = [2, 5, 6];
// const result3 = mergeSortedArray(3, nums1, 3, nums2);
// console.log(result3); // Output: [1, 2, 2, 3, 5, 6]
// */

// console.log("Question => You have two sorted lists of tasks: one sorted by priority and another sorted by deadline. You need to create a single schedule that merges both lists, ensuring tasks with higher priority and those with earlier deadlines are completed first.");
// /* 
// const tasksByPriority = [
//   { name: 'Task A', priority: 'High' },
//   { name: 'Task C', priority: 'Medium' },
//   { name: 'Task E', priority: 'Medium' },
//   { name: 'Task B', priority: 'Low' },
//   { name: 'Task D', priority: 'Low' },
// ];
// const tasksByDeadline = [
//   { name: 'Task B', deadline: '2023-04-15' },
//   { name: 'Task E', deadline: '2023-05-01' },
//   { name: 'Task A', deadline: '2023-05-10' },
//   { name: 'Task C', deadline: '2023-06-01' },
//   { name: 'Task D', deadline: '2023-07-01' },
// ];

// function sortedTaskList(n, taskPriority, m, taskDeadline){
//   let i =0;
//   let j = 0;
//   let k = 0;

//   let mergTaskArray = new Array(n + m)

//   while(i < n && m < j){
//     if(taskPriority[i] < taskDeadline[j]){
//       mergTaskArray[k] = taskPriority[i];
//       k++
//       i++
//     }else{
//       mergTaskArray[k] = taskDeadline[j];
//     }
//   }

//   while(i < n){
//     mergTaskArray[k] = taskPriority[i];
//     k++
//     i++
//   }

//   while (j < m){
//     mergTaskArray[k] = taskDeadline[j];
//     k++
//     j++
//   }

//   return mergTaskArray

// }

// const result4 = sortedTaskList(5,tasksByPriority, 5,tasksByDeadline)
// console.log(result4);
// */
// console.log("Problem Statement:=> You have two sorted contact lists from different applications—one sorted alphabetically by first name and another sorted by last name. You need to merge them into a single, unified contact list that maintains alphabetical order.");
// /* 
// const contactsByFirstName = [
//   { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
//   { firstName: 'Bob', lastName: 'Jones', email: 'bob@example.com' },
//   { firstName: 'Charlie', lastName: 'Williams', email: 'charlie@example.com' },
//   { firstName: 'David', lastName: 'Brown', email: 'david@example.com' },
//   { firstName: 'Eva', lastName: 'Davis', email: 'eva@example.com' },
// ];
// const contactsByLastName = [
//   { firstName: 'David', lastName: 'Brown', email: 'david@example.com' },
//   { firstName: 'Eva', lastName: 'Davis', email: 'eva@example.com' },
//   { firstName: 'Bob', lastName: 'Jones', email: 'bob@example.com' },
//   { firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
//   { firstName: 'Charlie', lastName: 'Williams', email: 'charlie@example.com' },
// ];

// function sortByalphabetical(firstName, lastName){
//   let i =0;
//   let j = 0;
 

//   let mergeFirstNameLastName = []

//   while(i < firstName.length && j < lastName.length){
//     const compareResult = firstName[i].firstName.localeCompare(lastName[j].lastName)

//     if(compareResult< 0)  {
//       mergeFirstNameLastName.push(firstName[i++])
//     }else{
//       mergeFirstNameLastName.push(lastName[j++])
//     }

//   }
//   // 
//   while( i < firstName.length){
//     mergeFirstNameLastName.push(firstName[i++])
//   }
//   while( j < lastName.length){
//     mergeFirstNameLastName.push(lastName[j++])
//   }
// // 

// // OR  spread operator
// // mergeFirstNameLastName.push(...firstName.slice(i), ...lastName.slice(j))


//   return mergeFirstNameLastName

// }

// const result5 = sortByalphabetical(contactsByFirstName, contactsByLastName);
// console.log(result5)
// */
// console.log("Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.");

// function removeDuplicatesFromSortedArrayII(n, nums) {
//   let count = 1;
//   let index = 1;

//   for(let i = 1; i < n ;i++){
//     if(nums[i] === nums[i-1] ){
//       count ++
//     }else{
//       count = 1
//     }

//     if( count <= 2 ){
//       nums[index++] = nums[i]      
//     }
//   }
//   return {
//     length : index,
//     modifiedArray : nums.slice(0, index)
//   }
// }

// const nums = [1, 1, 1, 2, 2, 3,3,3,4,4,4,5,8];
// console.log(removeDuplicatesFromSortedArrayII(nums.length, nums));

// // const length = removeDuplicatesFromSortedArrayII(nums.length, nums);
// // console.log(`Original Array: [${nums.join(', ')}]`);
// // console.log(`New Length: ${length}`);
// // console.log(`Modified Array: [${nums.slice(0, length).join(', ')}]`);

// /**
//  DSA -3
//  **/

//  console.log("Question=> Find next larger element [Pattern Introduction]");

// //  created function nextLargerElement name with two arguments n and arr. The n is represent to number of length of array. arr is the array.
// //  create nGe empty array with the size(n) of the given array to store the  next larger element
// //  filled it with -1 initialy that no larger number found yet
// //  created the stack array to keep track of indices for potential to larger element update
// //  created loop to iterate each element in arr
// // stored the current value index[i] in the currentValue var
// // created while loop as long as stack is not empty and currentValue is greater than top of stack element
// // updated the nGe array at the index stored in the top of the stack with current value, indicating that the current element is the next larger element for that element
// // then its pop the top index from the stack, as it found the larger next element.
// // outer while loop pushed the current index i to the stack for potential future update.
// // return the nGe to get the result

//  function nextLargerElement(n, arr) {
//   const nGe = new Array(n).fill(-1);
//   const stack = []

//   for( let i =0 ; i < n; i++){
//     const currentValue = arr[i];
//     while(stack.length >0 && currentValue > arr[stack[stack.length -1]]){
//       nGe[stack[stack.length -1]] = currentValue;
//       stack.pop()
//     }
//     stack.push(i)
//   }

//   return nGe

// }

// console.log("Question=>  Zigzag level order traversal of binary tree using Queue [Pattern Introduction]");

// // create TreeNode class object constructor to represnt the binary tree. Each node has a value (val) and reference to its left and right children

// class TreeNode {
//   constructor( val, left=null, middle=null, right = null){
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// function ZigzagLevelOrder(root){
//   // handel the base case. if tree is empty (no root) return the empty array
//   if(!root){
//     return []
//   }

//   // to store the result created empty result array
//   const res = [];

//   // created the queue and enqueue root noot to start the travesal
//   const queue = [root];

//   // initialised the flag to track whether to travers left-to-right or right-to-left at each level
//   let leftToRight = true

//   // loop the process each level of tree untill the queue is empty
//   while(queue.length > 0){
//     //  For each level it calculate the current levelSize indicating that number nodes at current level
//     const levelSize = queue.length;
//     // create a empty array to store the nodes at current level.
//     const currentLevel = [];

//     // iterate through the each node at current level
//     for(let i = 0; i < levelSize; i ++){
//       // dequeue the first node from queue
//       const node = queue.shift()

//       // conditional logic for the zigzag travesal
//       if(leftToRight){
//         // if left to right append the value at the end of current level array
//         currentLevel.push(node.val)
//       }else{
//         // if right to left prepend the value at the start of current level arry
//         currentLevel.unshift(node.val)
//       }

//       // Enques the left child of the dequeue nodes if it is exists
//       if(node.left){
//         queue.push(node.left)
//       }
//       // Enques the right child of the dequeu nodes if it is exists
//       if(node.right){
//         queue.push(node.right)
//       }

//     }
//     // adds the completed current level array to the result
//     res.push(currentLevel);
//     // toggle the direction flag for the next level
//     leftToRight = !leftToRight


//   }

//   // return the result
//   return res

// }

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(2)
// root.middle = new TreeNode(2)
// root.middle.left = new TreeNode(3)
// root.middle.right = new TreeNode(3)
// root.right.left = new TreeNode(4);
// root.right.right = new TreeNode(4);

// console.log(ZigzagLevelOrder(root));

// console.log("Question => Count Distinct Elements in Window");

// function countDistinctWindows(arr, B) {
//   // to store the result of sliding windows
//   const result = [];

//   // return the empty array if the count not found, corner case
//   if(B > arr.length){
//     return result
//   }

//   // crrate the frequency map to travers the current window element
//   const frequencyMap = new Map();

//   // create the first slide window, iterate the B first element through the arr
//   for (let i = 0; i < B; i++) {
//         if (!frequencyMap.has(arr[i])) {
//           frequencyMap.set(arr[i], 1);
//         } else {
//           frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
//         }
//       }
    
//       result.push(frequencyMap.size);
    
//       // Process subsequent windows using sliding window technique
//       for (let i = B; i < arr.length; i++) {
//         // Remove the leftmost element from the window
//         const leftElement = arr[i - B];
//         if (frequencyMap.get(leftElement) === 1) {
//           frequencyMap.delete(leftElement);
//         } else {
//           frequencyMap.set(leftElement, frequencyMap.get(leftElement) - 1);
//         }
    
//         // Add the rightmost element to the window
//         const rightElement = arr[i];
//         if (!frequencyMap.has(rightElement)) {
//           frequencyMap.set(rightElement, 1);
//         } else {
//           frequencyMap.set(rightElement, frequencyMap.get(rightElement) + 1);
//         }
    
//         result.push(frequencyMap.size);
//       }
    
//       return result;
  
// }


// function countDistinctElements(num, win, arr) {
//   // to store the result of sliding windows
//   const result = [];

//   // return the empty array if the count not found, corner case
//   if(win > num){
//     return result
//   }

//   // crrate the frequency map to travers the current window element
//   const freqMap = new Map();

//   // to store the count of the first win-1 element.
//   for(let i =0; i < win-1; i++ ){
//     if(freqMap.has(arr[i])){
//       freqMap.set(arr[i], freqMap.get(arr[i]) + 1)
//     }else{
//       freqMap.set(arr[i],1)
//     }
//   }


//   for(let i = win -1; i < num; i++){
//     // include the current index in the map
//     const currentVal = arr[i];
//     if(freqMap.has(currentVal)){
//       freqMap.set(currentVal, freqMap.get(currentVal) +1)
//     }else{
//       freqMap.set(currentVal, 1)
//     }

//     // store the size in the result
//   result.push(freqMap.size);

//   // drop the first element of the window
//   const win_first_indx = i -win +1;
//   if(freqMap.has(arr[win_first_indx])){
//     freqMap.set(arr[win_first_indx], freqMap.get(arr[win_first_indx])- 1);
//     if(freqMap.get(arr[win_first_indx])===0){
//       freqMap.delete(arr[win_first_indx])
//     }

//   }
  
// }

// return result
// }

// const arr6 = [1, 2, 1, 3, 4, 3];
// const num1 = 6;
// const windowSize = 3;
// const distinctCounts = countDistinctElements(num1,windowSize,arr6);
// const distinctCountsWin = countDistinctWindows(arr6,windowSize);
// console.log(distinctCounts); // Output: [2, 3, 3, 2]
// console.log(distinctCountsWin); // Output: [2, 3, 3, 2]

// console.log("Question => Find min element present in stack");

// class MinStack{
//   constructor(){
//     // main stack to store the element
//     this.stack = []
//     // Auxilery stack to store the minimum element
//     this.minStack = []
//   }

//   push(x){
//     // push the element into the main stack
//     this.stack.push(x);

//     // if minStack is empty or new element is the smaller than the current minimum
//     // push the new element into the minStack

//     if(this.minStack.length === 0 || x <= this.minStack[this.minStack.length -1]){
//       this.minStack.push(x)
//     }
//   }

//   pop(){
//     // if the main stack in not empty 
//     if(this.stack.length > 0){
//       // get the top element from the main stack
//       const popElement = this.stack.pop()

//       // if the pop element is equal to the current minimum pop from the minStack
//       if(popElement === this.minStack[this.minStack.length -1]){
//         this.minStack.pop()
//       }
//       return popElement
//     }
//   }

//   findMin(){
//     // if minStack is not empty, return the top element
//     if(this.minStack.length >0){
//       return this.minStack[this.minStack.length -1]
//     }
//     else{
//       return -1
//     }
//   }

// }
// /* 
// console.log("Question => First Unique Integer");
// function firstUniqueInteger( array){
//   // create an empty object to store the frequesncy of each integer
//   const freqUniqueNumberMap = {};

//   // popuplate the frequency of map
//   for(const num of array){
//     // increase the frequency count for the current number in the map
//     freqUniqueNumberMap[num] = (freqUniqueNumberMap[num] || 0) + 1
//   }

//   // find the first unique integer
//   for( const num of array){
//     if(freqUniqueNumberMap[num] === 1){
//       return num
//     }
//   }

//   // if no unique number found retuen -1
//   return -1
// }
// const nums2 = [2, 3, 5, 3, 7, 2, 5];
// const result5 = firstUniqueInteger(nums2);
// console.log(result5); // Output: 7
// */
// console.log("Find all anagrams in a string [Pattern Introduction]");
// // console.log("You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.Anagrams are permutations of a string. For P = abc,its anagrams are abc,acb,bca,bac,cba,cab.");

// // ifficiently compare two map for identical charector frequency to detect the anagram 
// function isIdentical(map1, map2) {
//   // iterates through each key value pair in map1
//   for (let [key, value] of map1) {
//     // if key doesnt exist in map2 or or its value doesnt match  return false
//     if (!map2.has(key) || map2.get(key) !== value) {
//       return false;
//     }
//   }
//   return true;
// }

// function findAllAnagramsInAString(S, P) {
//   // create maps to store the frequency
//   const countS = new Map();
//   const countP = new Map();

//   //  to store the starting indices in the array 
//   const result = [];
//   // store the length of pattern P
//   const K = P.length

//   // fill the count P with pattern string  
//   // iterate the each charector the P
//   for(let i = 0 ; i < K; i++){
//     // if charector already exist in the countP
//     if(countP.has(P[i])){
//       // increament its count 
//       countP.set(P[i], countP.get(P[i]) + 1)
//     }else{
//       // otherwise add to countP with count 1
//       countP.set(P[i], 1)
//     }
//   }

// // initilize count S for the first window
// // iterate the frist K character in the S
//   for(let i =0; i < K; i++){
//     // if charecter exists in the countS
//     if(countS.has(S[i])){
//       // increament the count
//       countS.set(S[i], countS.get(S[i]) +1)
//     }else{
//       // otherwise the add the count by 1
//       countS.set(S[i], 1)
//     }
//   }


//     // Check if the first window is an anagram
//   if (isIdentical(countS, countP)) {
//     // add 0 to the result
//     result.push(0);
//   }
//   // iterate the remainig character in the S
//   for (let i = K; i < S.length; i++) {
//     // Update countS for the next window
//     // sotre the current charecter
//     const currentChar = S[i];
//     // increment the current charecter in the countS
//     countS.set(currentChar, (countS.get(currentChar) || 0) + 1);

//     // Adjust countS for the character leaving the window
//     // store the charecter in the leaving window
//     const startIndexCharacter = S[i - K];

//     // decrement the count of the leaving the character in countS 
//     countS.set(startIndexCharacter, countS.get(startIndexCharacter) - 1);
//     // remove it the count become 0
//     if (countS.get(startIndexCharacter) === 0) {
//       countS.delete(startIndexCharacter);
//     }

//     // Check if the current window is an anagram
//     if (isIdentical(countS, countP)) {
//       // add its starting to the result
//       result.push(i - K + 1);
//     }
//   }
  
//   return result
  
//   }

// const anaArray = "abassssabbbab"
// const anaArrayL = "ab"
// console.log("findAllAnagramsInAString",findAllAnagramsInAString(anaArray, anaArrayL));

// console.log("Question => Find the longest palindrome from a given string");

// // function longestPalindrome(N, str) {
// //   const charCount = new Map()

// //   for(let i = 0; i < N; i++){
// //     const char = str[i];
// //     charCount.set(char, (charCount.get(char) || 0) +1)
// //   }

// //   let length = 0;
// //   let hasOddFreq = false

// //   charCount.forEach((count)=>{
// //     length += Math.floor(count/2) *2;
// //     if(count % 2 !== 0){
// //       hasOddFreq = true
// //     }   

// //   })
// //   if(hasOddFreq){
// //     length += 1
// //   }
// //   return length
// // }

// console.log("Question => K most frequent words");
// // function compare(a, b) {
// //   if (a[1] === b[1]) {
// //     return a[0].localeCompare(b[0]);
// //   }
// //   return b[1] - a[1];
// // }
// // function frequentWords(words, k) {
// //     // 1. Count word frequencies:
// //   const frequencyCnt = new Map();

// //   for (let i = 0; i < words.length; i++) {
// //     const word = words[i];
// //     frequencyCnt.set(word, (frequencyCnt.get(word) || 0) + 1);
// //   }

// //   let arr = [];
// //   frequencyCnt.forEach((value, key) => {
// //     arr.push([key, value]);
// //   });

// //   arr.sort(compare);

// //   const ans = [];

// //   for (let i = 0; i < k && i < arr.length; i++) {
// //     ans.push(arr[i][0]);
// //   }
// //   return ans;
// // }
// console.log("Question => function removeDuplicates(head)");
// class Node {
//   constructor(val, next) {
//     this.val = val;
//     this.next = next;
//   }
// }
// function removeDuplicates(head) {
//   if (head === null || head.next === null) {
//     return head;
//   }

//   const visited = new Set();
//   let current = head;
//   let previous = null;

//   while (current !== null) {
//     if (visited.has(current.val)) {
//       // Remove the duplicate node
//       previous.next = current.next;
//       current = current.next;
//     } else {
//       visited.add(current.val);
//       previous = current;
//       current = current.next;
//     }
//   }

//   return head;
// }




// const head = new Node(1, new Node(2, new Node(2, new Node(3, new Node(3, null)))));
// const headWithoutDuplicates = removeDuplicates(head);

// // Print the linked list without duplicates.
// let current = headWithoutDuplicates;
// while (current) {
//   console.log(current.val);
//   current = current.next;
// }

// console.log("Question => You are given a list of n integers, and your task is to calculate the number of distinct values in the list.");

// function distinctNumbers(n, nums){
//   // creating the setMap to store the unique value
//   const getDistinctNum = new Set();

//   // insert value in set using for loop
//   for(let i = 0; i<n ; i++){
//     getDistinctNum.add(nums[i])
//   }

//   // return the size of unique value
//   return distinctNumbers.size
// }

// const n4 = 5;
// const nums1 = [2,2,3,3,5,2];

// console.log(distinctNumbers(n4, nums1));



// console.log("Question =>You are given a list of words present in a book. Find out the count of unique words present in that book.")

// function uniqueWords(n,s) {
//   // create set to store to the string
//   const uniqueStr = new Set()

//   // insert the string into the array using loop
//   for(let i = 0; i <n; i++){
//     uniqueStr.add(s[i])
//   }

//   // return the size of string
//   return uniqueStr.size

// }
// let num4 = 5;
// let strnew = "RAVINDRA is looking for for is change"

// console.log( uniqueWords(num4,strnew));


// console.log("Question =>You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.You are supposed to find out which character occurs the maximum number of times and its occurrence count in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.")

// function mostFrequent(text) {
//   // to store the key charector and value initialise the Map data structue
//   const hasmapMostfreq = new Map();

//   // run the for loop over all charector ch trouout the text string
  
//   for(let i =0 ; i < text.length; i ++){
//     let cha = text[i];
    
//     // get the frequency of charector (cha) from hasmapMostfreq or default 0;
//     let freq = hasmapMostfreq.get(cha) || 0;

//     // put the frequency of charector in hashmap cha as a freq+1;
//     hasmapMostfreq.set(cha, freq+1);

    
//     // initialise the result charector and stor the maximumnumber;
   
    
//   }
//   // console.log(hasmapMostfreq);

//   let res = "";
//   let maxFrequency = 0;

//   // runs a loop overall keys (charector cha) of hasmap

//   for(const [cha, freq] of hasmapMostfreq){
//     // get the frequency of charector cha in freq integer
//     // let freq = hasmapMostfreq.get(cha) || 0;
    

// // if frequecny is > maxfrequency
//     if(freq > maxFrequency){
//       res = cha;
//       maxFrequency = freq
//     }
    
//     // frequency == maxFrequency
//     else if(freq==maxFrequency && cha < res){
//       // if cha < result 
//       res = cha
//     }
//   }

//   return [res, maxFrequency]
// }

// console.log(mostFrequent("A cat with rabiesretardsa dudefor no apparent reason."));

// const hashmap = new Map();
// hashmap.set('apple', 3);
// hashmap.set('banana', 5);
// hashmap.set('cherry', 2);
// hashmap.set('date', 4);
// const result11 = hashmap.get('apple') + hashmap.get('banana') * hashmap.get('cherry');
// console.log(result11);

// // What will be the output of the console.log statement?

// // const hashmap1 = new Map();
// // hashmap1.set('apple', 3);
// // hashmap.set('banana', 5);
// // hashmap1.set('cherry', 2);
// // hashmap1.set('date', 4);
// // console.log(hashmap1);
// // let result2 = 0;
// // for (const [fruit, count] of hashmap) {
// //   if (count % 2 === 0) {
// //     result2 += count;
// //   } else {
// //     result2 -= count;
// //   }
// // }
// // console.log(result2);

// // const mySet = new Set();
// // mySet.add(1);
// // mySet.add(2);
// // mySet.add(3);
// // mySet.add(2);

// // console.log("size",mySet.size);

// // const mySet2 = new Set([1, 2, 3]);
// // mySet2.add(4);
// // mySet2.delete(2);

// // console.log([...mySet2]);

// console.log("Question =>NthFibonacciNumber Given an integer n, you have to find the nth fibonacci number. The fibonacci sequence is given by 0,1,1,2,3,5,8,... where 0 and 1 are the 0th and 1st fibonacci numbers respectively and every consecutive number is the sum of the previous two numbers in the sequence.")


// function nthFibonacciNumber(n) {
//   // if 1 is 0 return 0 "first base case"
//   if(n ==0){
//     return 0
//   }

//   // if 1 is 1 then return 1
//   if(1==1){
//     return 1
//   }
  
//   // smaller problem 
//   // If n is greater than 1, the function recursively calls itself twice
//   let fib1 = nthFibonacciNumber(n-1)
//   let fib2 = nthFibonacciNumber(n-2);

//   // bigproblem 
//   // the two recursive calls are added together to obtain the nth Fibonacci number.
//   let res = fib1 + fib2;

//   return res
// }

// console.log("Question =>TribonacciBasic The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.Given n, return the value of Tn")

// function tribonacci(n) {
//   // base case
//   if(n==0){
//     return 0
//   }
//   if(n==1){
//     return 1
//   }
//   if(n==2){
//     return 1
//   }

//   // recursive call

//   // get the answer for tribonnachi (n-1) as trib1
//   let trib1 = tribonacci(n-1)

//   // get the answer for tribonnachi (n-2) as trib2
//   let trib2 = tribonacci(n-2)

//   // get the answer for tribonnachi (n-1) as trib3
//   let trib3 = tribonacci(n-3)

//   // store the result in (trib1 + trib2 + trib3)

//   const result = trib1 + trib2 + trib3

//   return result
// }

// console.log("Question =>Factorial Given a number n, you have to calculate the factorial of that number.Note : No inbuilt function to be used")

// function factorial(n) {
//   // base case 
//   if(n==0 || n==1){
//     return 1
//   }

//   // get small answer by calling factorial(n-1)
//   const smallans = factorial(n-1);

//   // store the result in big answer
//   const biganswer = smallans*N;

//   // return the result
//   return result
// }

console.log("Question => word count in given string")

// function wordCount(text){
//   // initialise the var to store the count
//   let count = 0;
//   // flag the word coun inword
//   let inWord = false;
// // iterating the value usin for loop
//   for(let i = 0; i < text.length; i++){
//     // check input string is empty
//     if(text[i] !== ' '){
//       if(!inWord){
//         count ++
//         inWord = true
//       }
//     }else{
//       inWord = false
//     }
//   }
//   return count
// }
// console.log(wordCount(" word count in given  string "));
// // second approach
// const wordscount = (str)=>{
//   // hadle the edge cases;
//   if(str.trim() === ""){
//     return 0
//   }
//   // remove the spaces and get the each word by converting into array  
//   const words = str.trim().split(/\s+/);
  
//   return words.length
// }
// console.log(wordscount(" word count in given  string "));

// function addMetirx(matrix1, matrix2){

//   // check the both matrix are same
//   if(matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length){
//     return
//   }
//   // initiliasing the empty array to store the result
//   const result = []

//   // usign the nested for loop itereting the both matrix value
//   for(let i =0; i< matrix1.length; i++){
//     // to push the matrix rows into column intililise the empty rows
//     const row = []
//     for(let j =0; j <matrix1[0].length; j++){
//       row.push(matrix1[i][j] + matrix2[i][j])
//     }
//     result.push(row)
//   }

//   // return the result

//   return result


// }

// // Recursive Example
// // Example usage:
// const m1 = [[1, 2], [3, 4]];
// const m2 = [[5, 6], [7, 8]];
// console.log(addMetirx(m1, m2));


// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   return base * power(base, exponent - 1);
// }

// const result = power(2, 3);
// 2*(2, 3-1)
// 2*(2,2)
// console.log(result);


// function gcd(a, b) {
//   if (b === 0) return a;
//   return gcd(b, a % b);
// }

// const result2 = gcd(48, 18)
// console.log(result2);


// function recursiveSum(n) {
//   if (n === 1) return 1;
//   return n + recursiveSum(n - 1);
// }

// const result3 = recursiveSum(4);
// console.log(result3);

// function recursiveReverse(str) {
//   if (str === "") return "";
//   return recursiveReverse(str.substr(1)) + str[0];
// }

// const result4 = recursiveReverse("world");
// console.log(result4);
 
// function countDown(n) {
//   if (n <= 0) return;
//   console.log(n);
//   countDown(n - 1);
// }
// console.log(countDown(5));

// function sumOddNumbers(n) {
//   if (n <= 0) return 0;
//   if (n % 2 !== 0) {
//     return n + sumOddNumbers(n - 2);
//   }
//   return sumOddNumbers(n - 1);
// }

// const result5 = sumOddNumbers(7);
// console.log(result5);
 
// function generatePascalTriangle(row, col) {
//   if (col === 0 || col === row) return 1;
//   return generatePascalTriangle(row - 1, col - 1) + generatePascalTriangle(row - 1, col);
// }

// const result6 = generatePascalTriangle(5, 2);
// console.log("generatePascalTriangle",result6);


// function gcd1(a, b) {
//   // Base case: If b is 0, the GCD is a
//   if (b == 0) {
//     return a;
//   }
//   // Recursive case: Call gcd with b and the remainder of a divided by b
//   return gcd1(b, a % b);
// }

// // function findGCDs(testCases) {
// //   const results = [];
// //   for (const [a, b] of testCases) {
// //     results.push(gcd(a, b));
// //   }
// //   return results;
// // }


// console.log("Question=> Given a number, return the reverse of that number.");
// // method-1 recursive
// function reverseNum(n) {    
//   let rev = 0;
//   let isNegative = n < 0;
//   n = Math.abs(n);  // Work with positive equivalent if n is negative

//   while (n > 0) {
//     rev = rev * 10 + n % 10;
//     n = Math.floor(n / 10);
//   }

//   return isNegative ? -rev : rev;
// }

// // Sample inputs and testing the function
// const result7 = reverseNum(1000); // Expected output: 54321
// console.log("reverseNum",result7); // 54321


// METHOD -2
// This method converts the number to a string, splits it into an array of characters, reverses the array, and then joins it back together.

// const num = 202;
// const reversNum = parseInt(String(num).split("").reverse().join(""), 10);
// console.log("reversNum",reversNum);


// function flipInt(n) {
//   let digit, result = 0;
//   while (n) {
//       digit = n % 10;
//       result = (result * 10) + digit;
//       n = n / 10 | 0; // Remove right-most digit
//   }
//   return result;
// }
// const numToReverse = +prompt("Enter a value");
// const reversedValue = flipInt(numToReverse);
// console.log("Reversed number:", reversedValue);


// console.log("Question => Write a function that reverses a string.");

// function reverseString(s) {
//     let i = 0;
//     let j = s.length - 1;
//     let charArray = s.split('');

//     while (i < j) {
//         let temp = charArray[i];
//         charArray[i] = charArray[j];
//         charArray[j] = temp;

//         i++;
//         j--;
//     }
//     return charArray.join('');
// }

// console.log(reverseString("abc"));

// // console.log("Question =>Given a string, convert lowercase to uppercase without using any inbuilt function.")
// function capitlalLetter(str){
//   let result = "";
// for (let i = 0; i < str.length; i++) {
//   let charCode = str.charCodeAt(i);

//    if (charCode >= 97 && charCode <= 122) {
//     charCode -= 32;
//   }
//   let capitalizedChar = String.fromCharCode(charCode);
//   result += capitalizedChar;
// }
// return result
// }
// console.log(capitlalLetter("Hello"));


// console.log("Question => Given a string count the frequency of each vowel in it.")


// function countVowels(s) {
//   let m = new Map();
//   let n = s.length;
//   for (let i = 0; i < n; i++) {
//     let ch = s[i];

//      if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
//       {
//         if (m.has(ch)) {
//           m.set(ch, m.get(ch) + 1);
//         } else {
//           m.set(ch, 1);
//         }
//       }
//     }
//     return m;
//   }

//   console.log(countVowels("KAvita I Love you"));

console.log("Question =>Given a string S.Implement an algorithm to determine if a string has all unique characters.");

// function isUnique(s) {
//     let st = new Set();
//     let n = s.length;    
//      for (let i = 0; i < n; ++i) {
//       if(st.has(s[i])){
//         return false
//       }
//       st.add(s[i]);
//     } 
//     return true  
// }
// console.log(isUnique("abcd"));

console.log("Question not solved =>Diagonal Sum () Debug Given a matrix of dimensions n x m, you are tasked with finding the sum of elements by starting at the index (i, j) and moving in a diagonal order. Write a function that takes the matrix, starting index (i, j), and returns the sum of the elements encountered while moving diagonally. If the starting index is invalid, return")

// function diagonalSum(matrix,n,m,i,j) {
//   // Check for invalid starting index
//   if (i >= n || j >= m || i < 0 || j < 0) {
//     return -1;
//   }

// let diagonalSum = 0;
// let row = i;
// let col = j;

// while (row < n && col < m) {
//   diagonalSum += matrix[row][col];
//   row++;
//   col++;
// }

// return diagonalSum;
// }

console.log("Question => Nth Fibonacci Number Debug Given a number n, you have to find the number of Fibonacci numbers lesser than n.")

// function nthFibonacciNumber(n) {
//   if (n <= 0) {
//       return 0;
//     }
//   if (n === 1) {
//       return 1;
//     }
//      let n1=1;
//      let n2 = 1;
//      let fib_count = 2;    
  
//       while (true)  {
//         let fib = n1+n2;
//         if(fib >= n){
//             break
//         }
//           n1 = n2;
//           n2 = fib;
//           fib_count ++ 
//       }
  
//       return fib_count;
//   }

// Example usage
// const input = `1`;
// const n = parseInt(input.trim(), 10);

// const result9 = countFibonacciNumbersLessThan(n);
// console.log(result9);

console.log("Question =>Search Target Debug Given an array of N distinct integers and a target value X, return 1 if the target is found. If not found then return -1")
// Note - Try implementing with O(NlogN) runtime complexity.

// function searchTarget(N,A,X) {

//   A.sort((a, b) => a -b )
  
//   let left = 0; 
//   let right = N - 1; 
//    while (left <= right)
//   { 
//       let mid = Math.floor(left + (right - left) / 2); 
//       // let mid = parseInt(mid);
      
//       if (A[mid] === X) {
//           return 1; 
//       } else if (A[mid] < X) { 
//           left = mid + 1; 
//       } else { 
//           right = mid - 1; 
//       }
//   }
  
//    return -1;
// }

console.log("Question =>CountPrimesBasic Count the number of prime numbers less than a non-negative number, n.")



// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let factorNum = 2; factorNum * factorNum <= num; factorNum++) {
//     if (num % factorNum === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function countPrimes(n) {
//   let count = 0;

//   for (let i = 2; i < n; i++) { // Loop until n-1
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// const n10 = 20;
// console.log(countPrimes(n10));

// // method - 2 Using Sieve of Eratosthenes (Optimized Approach)
// function countPrimes(n) {
//   if (n <= 2) return 0;

//   const isPrime = new Array(n).fill(true);
//   isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

//   for (let i = 2; i * i < n; i++) {
//     if (isPrime[i]) {
//       for (let j = i * i; j < n; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   let count = 0;
//   for (let i = 2; i < n; i++) {
//     if (isPrime[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// // Example usage
// const n = 10;
// console.log(countPrimes(n)); // Expected output: 4 (primes less than 10 are 2, 3, 5, 7)

console.log("Question =>Given an array of numbers, find GCD of the array elements.The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.")

function gcd(a,b){
if(b==0){
  return a
}
return gcd(b, a%b)
}

function gcdOfArray(n,arr) {
    let res = arr[0];
    for(let i =0; i< n; i++){
      res = gcd(arr[i], res)
    }
    return res
}

console.log("Question ==>  Given a DNA strand, return its RNA complement (per RNA transcription).Both DNA and RNA strands are a sequence of ucleotides.The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:G -> C, C -> G, T -> A, A -> U");

// // method1
// function toRna(dna){
//   const complement ={
//     G : "C",
//     C : "G",
//     T : "A",
//     A : "U"
//   }
//   return dna.split('').map(nucleotides => complement[nucleotides] || "").join('')
// }
// console.log(toRna("GATC"));

// // method 2
// function toRna1(dna){
//   let rna = ""
//   for(let nucleotide of dna){
//     switch(nucleotide){
//       case 'G' : rna += 'C';
//       break;
//       case 'C' : rna += 'G'
//       break;
//       case 'T' : rna += 'A'
//       break;
//       case 'A' : rna += 'U'
//       break;
//       default : throw new Error("Invalid nucleotide in DNA strand")
//     }
//   }
//   return rna
// }
// console.log(toRna1("GATC"));

console.log("Write a function areAnagrams(strOne, strTwo), which takes two strings: strOne and strTwo as arguments. The function should return true if the two strings are anagrams and false otherwise.");

console.log("function that will be used to retrieve the nth largest element from an unsorted array. The first one is an unsorted array (e.g., [ 43, 56, 23, 89, 88, 90, 99, 652]), and the second one is a number n (e.g., 4) representing the position of the largest element that we want to find.");
const lgArray = [ 43, 56, 23, 89, 88, 90, 99, 652]
function nthLargestNumber(lgArray, nth){
  // sort the array in ascendin order
  const sortNth = lgArray.sort((a, b) => b - a)
  console.log(sortNth);
  return sortNth[nth -1]
  // const findIndex = 
  

}
console.log(nthLargestNumber(lgArray, 4));











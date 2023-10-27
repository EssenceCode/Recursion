/* eslint-disable no-unused-vars */
export default function fibsRec(n, arr = [0,1]) {
    if(n <= 1) return arr;
 
    //  const arr = fibsRec(n - 1);
 
 
     arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
 
     return fibsRec(n - 1, arr);
 };

// returns the array length 
function fibsRecursion(n, arr = [0,1]) {
    if(n <= 2) return arr

    arr.push(arr[arr.length - 2] + arr[arr.length - 1])

    return fibsRecursion(n - 1, arr)
}

// loop
function fibs(n) {
    let firstEl = 0;
    let secondEl = 1;
    let total = 0;
    const arr = []

    for(let i = 1; i <= n; i += 1) {
      total = firstEl + secondEl
      secondEl = firstEl
      firstEl = total
      arr.push(total)
    }

    return arr
}
// integer 
function fibsRecInt(n) {
    if(n <= 1) return n;
    console.log(n)
    return fibsRecInt(n - 1) + fibsRecInt(n - 2)
}

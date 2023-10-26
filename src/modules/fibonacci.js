export default function fibsRec(n) {
    if(n <= 1) return [0,1];
 
     const arr = fibsRec(n - 1);
 
 
     arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
 
     return arr;
 };
// returns the array length 
// eslint-disable-next-line no-unused-vars
function fibsRecursion(n, arr = [0,1]) {
    if(n <= 2) return arr

    arr.push(arr[arr.length - 2] + arr[arr.length - 1])

    return fibsRecursion(n - 1, arr)
}
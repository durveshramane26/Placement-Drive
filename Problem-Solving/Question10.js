// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.


// const TwoArraySum = (arr1, arr2) => {
//     let result = [];
//     let a = arr1.join('');
//     let b = arr2.join('');
//     let c = parseInt(a) + parseInt(b);
//     result = String(c).split('');
//     return result;
// }

const TwoArraySum = (arr1, arr2) => {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        let temp = arr1[i] + arr2[i]
        if (temp > 9) {
            result.push(temp % 10)
            arr1[i + 1] += 1
        }   
        else {
            result.push(temp)
        }
    }
    return result

}

const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];
console.log(TwoArraySum(arr1, arr2));
//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
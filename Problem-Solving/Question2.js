//  wirte a program to count the number of occurrences of any character on String.

const countOccurrences = (string) => {
    let count = 0;
    dic = {};
    for (let i = 0; i <= string.length - 1; i++) {
        if (dic[string[i]]) {
            dic[string[i]]++;
        }
        else {
            dic[string[i]] = 1;
        }
    }
    return dic;
} 

console.log(countOccurrences("abcdabcd"));


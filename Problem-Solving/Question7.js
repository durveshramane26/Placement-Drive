// Check whether two strings are anagram of each other example - "abcd" and "dcba"

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let string1 =  str1.split('').sort().join('');
    let string2 = str2.split('').sort().join('');
    console.log(string1)
    console.log(string2)
    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    }


}

str1 = "listen"
str2 = "silent"

console.log(isAnagram(str1, str2))
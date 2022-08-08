//Given a string, reverse each word in the sentence



const reverseString = (string) => {
    let newString = "";
    let newWord = "";
    let words = string.split(" ");
    console.log(words);
    let reversedWords = words.map(word => {
           for (let i = 0; i < word.length; i++) {
                newWord = word[i] + newWord;
            }
            newString =  newString + newWord + " ";
            newWord = "";
                
    })
    console.log(newString);
    
    
    
}

// const RevString = string => {
//     const arr = string.split(" ");
//     const revArr = arr.map(word => {
//         return word.split("").reverse().join("");
//     })
//     return revArr.join(" ");
// }

string = "Welcome to this Javascript Guide"
reverseString(string)

// console.log(RevString(string));
//Given a string, reverse each word in the sentence



let reverseString = (string) => {
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

string = "Welcome to this Javascript Guide"
reverseString(string)
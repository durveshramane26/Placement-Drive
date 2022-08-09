// write a function which takes parameter n and returns all the numbers 1 to n which are squares of another number

// const squareRoot = (n) => {
//     for (let i = 1; i <= n; i++) {
//         for ( let j = 1 ; j <= n; j++) {
//             if( j*j == i) {
//                 console.log(i)
//             }
//         }
//     }
// }  

const squareRoot = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i**0.5 == Math.floor(i**0.5)) {
            console.log(i)
        }
    }
}

n=25;
console.log(squareRoot(n))
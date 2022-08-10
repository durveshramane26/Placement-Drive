// first element should be max value, second should be min value, third should be second max, fourth should be second min and so on

const findMaxandMin = (arr) => {
    arr.sort((a, b) => a - b);
    
    console.log(arr)
    k = arr.length-1;
    const arr1 = []
    for (let i = 0; i < arr.length; i++ ) {
        if( k > i) {
            arr1.push(arr[k])
            k--;
            arr1.push(arr[i])
        }
        if (k == i) {
            arr1.push(arr[i])
        }
       
        
    }

    console.log(arr1)

        
    
}


arr = [7,2,6,4,5,3,1];
console.log(findMaxandMin(arr))
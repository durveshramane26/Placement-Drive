const merge = (left , right) => {
    const k = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            k.push(left[i]);
            i++;
        } else {
            k.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        k.push(left[i]);
        i++;
    }
    while (j < right.length) {
        k.push(right[j]);
        j++;
    }
    return k;
    
}

const mergeSort = list1 => {
    if (list1.length < 2) {
        return list1;
    }
    const middle = Math.floor(list1.length / 2);
    const left = list1.slice(0, middle);
    const right = list1.slice(middle);

    return merge(mergeSort(left), mergeSort(right));


}


console.log(mergeSort([4 , 6, 5, 8, 9, 10, 1, 3]));
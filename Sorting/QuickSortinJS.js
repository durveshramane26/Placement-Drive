function partition(arr, left, right) {
    var pivot = arr[right];
    var i = left;
    var j = right -1;
    
    while (i <= j) {
        if (arr[i] <= pivot) {
            i++;
        } else {
            swap(arr, i, j);
            j--;
        }
    }
    swap(arr, i, right);
    return i;

}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, left, right) {
    if (left < right) {
        var pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
}

arr = [4 , 6, 5, 8, 9, 10, 1, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
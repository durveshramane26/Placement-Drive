function BinarySearch(arr, x) {
    var low = 0;
    var high = arr.length - 1;
    var mid = 0;

    while(low <= high) {
        mid = Math.floor((low + high) / 2);

        if(arr[mid] < x) {
            low = mid + 1;
        }
        else if(arr[mid] > x) {
            high = mid - 1;
        }
        else {
            return mid;
        }

    }

    return -1
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
x = 10;

var result = BinarySearch(arr, x);

if(result != -1) {
    console.log("Element found at index " + result);
    console.log("Element is " + arr[result]);
}
else {
    console.log("Element not found");
}
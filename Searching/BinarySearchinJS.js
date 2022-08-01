function BinarySearch(arr, low, high, x) {
    if (high >= low) {
        var mid = Math.floor((low + high) / 2);

        if (arr[mid] == x) {
            return mid;
        }
        else if (arr[mid] > x) {
            return BinarySearch(arr, low, mid - 1, x);
        }
        else {
            return BinarySearch(arr, mid + 1, high, x);
        }
    }
    else {
        return -1;
    }
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var x = 10;

result = BinarySearch(arr, 0, arr.length - 1, x);

if(result == -1) {
    console.log("Element not found");
}
else {
    console.log("Element found at index " + result);
    console.log("Element is " + arr[result]);
}
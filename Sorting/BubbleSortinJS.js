function BubbleSort (arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }

    console.log(arr)
}


BubbleSort([6, 4, 3, 7, 1])
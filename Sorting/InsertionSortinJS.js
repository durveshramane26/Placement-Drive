function InsertionSort(list1) {
    for (var i =1; i < list1.length; i++) {
        temp = list1[i];
        var j = i - 1;
        while (j >= 0 && list1[j] > temp) {
            list1[j + 1] = list1[j];
            j--;
        }

        list1[j + 1] = temp;
    }

    console.log(list1);
}

var listt1 = [4 , 6, 5, 8, 9, 10, 1, 3];
InsertionSort(listt1);
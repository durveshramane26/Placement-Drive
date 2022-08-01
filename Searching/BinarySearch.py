def BinarySearch(list1, low, high, x):
    if high >= low:
        mid = (high + low) // 2

        if list1[mid] == x:
            return mid

        elif list1[mid] > x:
            return BinarySearch(list1, low, mid - 1, x)

        else:
            return BinarySearch(list1, mid + 1, high, x)

    else:
        return -1


list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
x = 10

result = BinarySearch(list1, 0, len(list1) - 1, x)

if(result == -1):
    print("Element not found")
else:
    print("Element found at index", result)
    print("Element is", list1[result])

    
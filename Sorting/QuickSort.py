def partition(list1, left, right):
    i = left
    j = right -1
    pivot = list1[right]

    while i < j:
        while i < right and list1[i] < pivot:
            i += 1
        while j > left and list1[j] > pivot:
            j -= 1

        if i < j:
            list1[i], list1[j] = list1[j], list1[i]

    if list1[i] > pivot:
        list1[i], list1[right] = list1[right], list1[i]

    return i


def quickSort(list1, left, right):
    if left < right:
        pivot = partition(list1, left, right)
        quickSort(list1, left, pivot - 1)
        quickSort(list1, pivot + 1, right)


list1 = [22, 11, 99, 66, 33, 55, 77, 44, 88, 22, 11, 99, 66, 33, 55, 77]
quickSort(list1, 0, len(list1) - 1)
print(list1)
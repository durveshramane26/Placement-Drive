def BubbleSort(list1):
    for i in range(len(list1)):
        for j in range(len(list1)-i-1):
            if list1[j] > list1[j+1]:
                temp = list1[j]
                list1[j] = list1[j+1]
                list1[j+1] = temp
                
    print(list1)


list2 = []
for i in range(6):
    b=int(input("Enter the number: "))
    list2.append(b)

BubbleSort(list2)
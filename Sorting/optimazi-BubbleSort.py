def OptimizeBubbleSort(List1):
    swapped = False
    for i in range(len(List1)):
        for j in range(len(List1)-i-1):
            if List1[j] > List1[j+1]:
                temp = List1[j]
                List1[j] = List1[j+1]
                List1[j+1] = temp
                swapped = True
        if swapped == False:
            break
    print(List1)


List1 = []
for i in range(6):
    b=int(input("Enter the number: "))
    List1.append(b)

OptimizeBubbleSort(List1)
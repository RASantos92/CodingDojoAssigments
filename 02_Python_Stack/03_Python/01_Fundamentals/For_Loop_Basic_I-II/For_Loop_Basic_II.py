# #1- Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

# def biggieSize(list):
#     for i in range(len(list)):
#         if list[i] > 0:
#             list[i] = "big"
#     return list


# print(biggieSize([-1, 3, 5, -5]))


# #2- Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it

def countPostives(list):
    posVal = 0
    for i in range(len(list)):
        if list[i] > 0:
            posVal += 1
    list[len(list)-1] = posVal
    return list


# print(countPostives([5, -23, -3, 7, 21, 15]))


# #3- Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7

def sumTotal(list):
    sum = 0
    for i in range(len(list)):
        sum = sum + list[i]
    return sum


# print(sumTotal([1, 2, 3, 4, 5, -14]))
# -------------------------------------------------------------------------------------------------------------------------------Alternate to Sum Total(notice for for loop statement)
def sumTotal(list):
    total = 0
    for num in list:
        total +=num
    return total


# print(sumTotal([1, 2, 3, 4, 5, -12]))
# -------------------------------------------------------------------------------------------------------------------------------Alternate to Sum Total

# #4- Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5

def getAverage(list):
    sum = 0
    for i in range(len(list)):
        sum = sum + list[i]
        avg = sum/len(list)
    return avg


# print(getAverage([2, 2, 2, 7]))


# #5- Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0

def listLength(list):
    newList = 0
    for i in range(len(list)):
        newList = len(list)
    return newList


# print(listLength([2, 2, 2, 2, 5, 10]))


# #6- Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False
# 37, 2, -11, -9, 5, -17

def getMinimum(list):
    if len(list) < 0:
        minVal = 0
        for i in range(len(list)):
            if list[i] < minVal:
                minVal = list[i]
        return minVal

    return False

# print(getMinimum([]))
# -------------------------------------------------------------------------------------------------------------------------------Alternate to Get Minimum
# def getMinimum(list):
#     minVal =list [0]
#         print(minVal)
#         for num in list:
#             if list[i] < minVal:
#                 minVal = list[i]
#         return minVal

#     return False

# print(getMinimum([]))


# -------------------------------------------------------------------------------------------------------------------------------Alternate to Get Minimum

# #7- Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False
# 37, 2, -11, -9, 5, -17

def getMaximum(list):
    if len(list) > 0:
        maxVal = 0
        for i in range(len(list)):
            if list[i] > maxVal:
                maxVal = list[i]
        return maxVal
    return False


# print(getMaximum([]))


# #8- Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

# def ultimateAnalysis(list):
#     dict = {sumTotal:0, average:0, minimum:0, maximum:0, len(list)}


# -------------------------------------------------------------------------------------------------------------------------------Alternate to UltimateAnaylsis
def ultimateAnalysis(list):
    # sumTotal = ""
    # avg = ""
    output = {'sumTotal': sumTotal(list), 'average': avg(list), 'minimum': min(list), 'length': len(list)}
    print(output)


ultimateAnalysis([37, 2, 1, 9])


# -------------------------------------------------------------------------------------------------------------------------------Alternate to UltimateAnaylsis

# #9- Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

# def reverseList(list):
#     for i in range(0, len(list)//2, 1):
#         list[i], list[len(list)-i-1] = list[len(list) - i - 1], list[i]
#     return list


# print(reverseList([37, 2, 1, -9]))

# # // Makes each function easier to read on console.
# # var end = "end"; // phrase to type into readability() function to console.log end of program statement
# function readability(input) {
#     console.log(
#         "----------------------------------------------------------------------------------------------------"
#     );
#     if (input == "end") {
#         console.log("                                       End of Program");
#     } else if (input !== "end") {
#         # // simple check for people entering other variables `end` or nothing at all into the function
#         console.log("                                       Next Function");
#     }
#     console.log(
#         "----------------------------------------------------------------------------------------------------"
#     );
#     return 0;
# }

# Basic - Print all integers from 0 to 150.
# for i in range(0,151,1):
#     print(i)


# Multiples of Five - Print all the multiples of 5 from 5 to 1,000
# for i in range(5, 1000, 1):
#     if i%5==0:
#         print(i)


# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
# for i in range(1, 101, 1):
#     if (i % 10) == 0:
#         i = "Coding_Dojo"
#         print (i)
#     elif (i % 5) == 0:
#         i = "Coding"
#         print(i)


# Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
# total = 0
# for i in range(0, 500000, 1):
#     if i % 2 != 0:
#         total += i
# print(total)


# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.


# for i in range(2018, 0, -4):
#     if i > 0:
#         print(i)


# Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines
# lowNum = 2
# highNum = 144
# mult = 7
# for i in range(lowNum, highNum+1, 1):
#     if i % mult == 0:
#         print(i)





def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)



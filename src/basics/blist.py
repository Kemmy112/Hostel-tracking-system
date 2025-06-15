

# thislist = ["apple", "banana", "cherry"]
# print(thislist[-1])

# You can specify a range of indexes by specifying where to start and where to end the range.

# When specifying a range, the return value will be a new list with the specified items.

# thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]

# if "avocado" in thislist:
#     print("Yes, mango is present")

# else:
#     print("Nope, sorry")


# print(thislist[2:-2])

# To change the value of items within a specific range, define a list with the new values, and refer to the range of index numbers where you want to insert the new values

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist.insert(2, "blackcurrant")
print(thislist)
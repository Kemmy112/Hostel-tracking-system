# Here we want to learn a little on boolean values in python.

# print(10<3);  # When checked in the compiler, we see 'false' displayed

#print(3==3);  # This should show true.


# bool() helps you to analyse through values and either give true or false.

# x = "";
# y = "Rick"


# print(bool(x))
# print(bool(y))


# class myclass():
#   def __len__(self):
#     return 0

# myobj = myclass()
# print(bool(myobj))

class Name:
    def nomenclature(self):
        return "Blake"

    def __bool__(self):
        return False  # or some logic

myobj = Name()
print(bool(myobj))  # Will print False if __bool__ returns False



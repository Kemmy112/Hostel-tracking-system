# My first python code!

# print("Hello World!");

# name = "Ekemini-Abasi";
# mood = "happy";

# print("My name is " + name + " and I am " + mood + " today!");

# Basic arithmetic with numbers

# a = 2;
# b = 3;

# result = a + b;
# print(result);

# Newness unlocked together with python indentations.

# x, y, z = "red", "blue", "green";
# print(x, y, z);

# Unpacking a collection with python

# name = "Mike Jones";
# age = 39;
# birthday = "June 12";

# credentials = [name, age, birthday];

# print(credentials);


# Trying out global vars with python

my_name = "Ekemini-Abasi";  # global variable. It can be used anywhere.

def myfunc():
    my_name = "Anita."  # local to the function
    print("My beautiful daughter's name is " + my_name);

myfunc();
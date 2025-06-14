# This is my very first trial at a simple task.

# Let us see how it goes.

import random;

masterMind = (random.randint(1,20));
attempts = 0; # Initial number of trials.

print("🎲 Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 20.")

while True:
    user_input = int(input("Enter your guess: "))
    attempts += 1

    if user_input == masterMind:
        print(f"🎉 Well done! You guessed it in {attempts} attempt(s)!")  # Remember this f? for merging strings with integers smoothly?
        break
    elif user_input < masterMind:
        print("Too low. Try a higher number.")
    else:
        print("Too high. Try a lower number.")
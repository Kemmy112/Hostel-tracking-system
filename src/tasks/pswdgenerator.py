import random
import string

print("Welcome! I will help you generate a unique 10-character password")

while True:
    userInput = input("Proceed? (y/n): ").lower()

    if userInput == 'y':
        password = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(16))
        print("🔐 Your password is:", password)
        break

    elif userInput == 'n':
        print("No problem. Goodbye!")
        break

    else:
        print("⚠️ Please enter only 'y' or 'n'.")
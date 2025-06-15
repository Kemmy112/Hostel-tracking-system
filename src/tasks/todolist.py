tasks = []

def add_task():
    task = input("Enter your task:")
    tasks.append(task)
    print("Task added succesfully!")


def view_task():
    if not tasks:
        print("No tasks yet")

    else:
        print("\nYour Tasks")
        for i, task in enumerate(tasks, 1):
            print(f"{i}.{task}")


def remove_task():
    view_task()
    
    try:
        task_num = int(input("Enter the task number to remove: "))
        if 0 < task_num <= len(tasks):
            removed = tasks.pop(task_num - 1)
            print(f"Removed: {removed}")
        else:
            print("Invalid number.")
    except ValueError:
        print("Please enter a valid number.")


def mark_done():
    view_task()

    try:
        task_num = int(input("Enter the task number to mark as done "))
        if 0 < task_num <= len(tasks):
            tasks[task_num - 1] += " ✅"
            print("Task marked as done!")
        else:
            print("Invalid number.")
    except ValueError:
        print("Please enter a valid number.")


def main():

    while True:
        print("\n--- TO-DO MENU ---")
        print("1. Add task")
        print("2. View tasks")
        print("3. Remove task")
        print("4. Mark task as done")

        choice = input("Choose an option (1-5): ")

        if choice == "1":
            add_task()
        elif choice == "2":
            view_task()
        elif choice == "3":
            remove_task()
        elif choice == "4":
            mark_done()
            break
        else:
            print("Invalid choice. Try again.")


# 🔁 Start the program
main()
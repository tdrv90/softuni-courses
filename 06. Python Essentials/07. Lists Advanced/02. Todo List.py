# start with empty list to append tasks in it
todolist = []

# get all the notes that comes as input
while True:
    command = input().split('-')
    if command[0] == 'End':
        break

    priority = int(command[0])
    text = command[1]
    todolist.append([priority, text])

# sort all notes by priority
todolist = sorted(todolist, key=lambda x: x[0])

# make a list with only the todo text without the priority
output = [x[1] for x in todolist]
print(output)

# Example input:
# 2-Walk the dog
# 1-Drink coffee
# 6-Dinner
# 5-Work
# End

# Example output:
# ['Drink coffee', 'Walk the dog', 'Work', 'Dinner']
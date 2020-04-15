queue = []
paid_queue = []

while True:
    command = input()

    if command == 'End':

        [print(x) for x in paid_queue[::-1]]
        print(f'{len(queue)} people remaining.')
        break
    if command != 'Paid':
        queue.append(command)
    elif command == 'Paid':
        while queue:
            paid_queue.append(queue.pop())

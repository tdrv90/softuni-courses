from collections import deque


def water_dispenser():
    dispenser_liters = int(input())  # starting qty of water
    people = deque()

    while True:
        person = input()
        if person == 'Start' or person == 'End':
            break

        people.append(person)

    while True:
        command = input()

        if command == 'End':
            break

        if command.startswith('refill'):
            dispenser_liters += int(command.split(' ')[1])
            continue

        person = people.popleft()
        person_liters = int(command)
        if dispenser_liters < person_liters:
            print(f'{person} must wait')
        else:
            dispenser_liters -= person_liters
            print(f'{person} got water')

    print(f'{dispenser_liters} liters left')


water_dispenser()

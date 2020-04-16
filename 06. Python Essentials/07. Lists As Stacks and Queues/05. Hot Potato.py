from collections import deque


def hot_potato(people, n):
    people = deque(people)
    index = 0

    while people:
        person = people.popleft()
        index += 1

        if index == n:
            index = 0

            if people:
                print(f'Removed {person}')
            else:
                print(f'Last is {person}')
        else:
            people.append(person)


tests = [
    ['Tracy Emily Daniel', '2'],
    ['George Peter Michael William Thomas', '10'],
    ['George Peter Michael William Thomas', '1'],
]

[hot_potato(names.split(), int(num)) for [names, num] in tests]

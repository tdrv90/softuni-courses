o = input()
a = int(input())
b = int(input())


def calculator(operator, n1, n2):
    OPERATIONS_DICT = {
        'multiply': lambda x = n1, y = n2: x * y,
        'divide': lambda x = n1, y = n2: x / y,
        'add': lambda x = n1, y = n2: x + y,
        'subtract': lambda x = n1, y = n2: x - y
    }
    return f'{OPERATIONS_DICT[operator]():.0f}'


print(calculator(o, a, b))

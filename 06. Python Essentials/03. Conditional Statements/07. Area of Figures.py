import math

figure = str(input())

if figure == 'square':
    side = float(input())
    area = side * side
elif figure == 'rectangle':
    length = float(input())
    width = float(input())
    area = length * width
elif figure == 'circle':
    radius = float(input())
    area = math.pi * radius * radius
elif figure == 'triangle':
    base = float(input())
    height = float(input())
    area = 0.5 * base * height

print(f'{area:.3f}')

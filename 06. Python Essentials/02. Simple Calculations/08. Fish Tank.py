length = int(input())
width = int(input())
height = int(input())
percent = float(input()) * 0.01

volume = length * width * height * 0.001

print(f'{volume*(1-percent):.3f}')
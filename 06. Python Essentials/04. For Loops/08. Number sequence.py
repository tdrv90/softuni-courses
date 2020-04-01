numbers = []

count_of_nums = int(input())
for i in range(count_of_nums):
    n = int(input())
    numbers.append(n)

print(f'Max number: {max(numbers)}')
print(f'Min number: {min(numbers)}')

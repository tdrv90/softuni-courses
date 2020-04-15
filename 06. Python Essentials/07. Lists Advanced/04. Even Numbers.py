# one-liner:
# print([num[0] for num in list(enumerate(input().split(', '))) if int(num[1]) % 2 == 0])

nums = input().split(', ')

def is_even(x):
    return int(x) % 2 == 0

indices = [num[0] for num in list(enumerate(nums)) if is_even(num[1])]

print(indices)

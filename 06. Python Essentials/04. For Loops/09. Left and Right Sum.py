n = int(input())

left = 0
right = 0

for i in range(0, n):
    num = int(input())
    left += num

for i in range(n, n + n):
    num = int(input())
    right += num

if left == right:
    print(f'Yes, sum = {left}')
else:
    diff = abs(left - right)
    print(f'No, diff = {diff}')

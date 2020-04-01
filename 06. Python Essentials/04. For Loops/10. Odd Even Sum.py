n = int(input())

odd_sum = 0
even_sum = 0

for i in range(n):
    num = int(input())
    if i % 2 == 1:
        odd_sum += num
    else:
        even_sum += num

diff = abs(odd_sum - even_sum)

if diff == 0:
    print('Yes')
    print(f'Sum = {odd_sum}')
else:
    print('No')
    print(f'Diff = {diff}')
